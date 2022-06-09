import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressCard,faSave, faEdit, faPlusSquare, faStairs, faMemory, faSearch, faRefresh, faList} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import MyToast from "./MyToast";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.seatChange=this.seatChange.bind(this);
    this.submitSeat=this.submitSeat.bind(this);
  }
    
    intialState =
    {
      office_id: "",
      address: "",
      floor: "",
      available_spaces: "",
      seat_capacity: ""
    };

    componentDidMount(){
      const adminId= +this.props.match.params.office_id;
      if(adminId){
        this.findAdminById(adminId);
      }
    }

    findAdminById = (adminId) => {
      axios.get("http://localhost:8080/api/admin/AdminstrationOffice/"+adminId)
      .then(response =>
        {
          if(response.data != null){
            this.setState({
              office_id :response.data.office_id,
              address: response.data.address,
              floor: response.data.floor,
              available_spaces: response.data.available_spaces,
              seat_capacity: response.data.seat_capacity,
            });
          }
        }).catch((error)=>{
          console.error("Error "+error);
        });

    }

    resetChange=() =>{
      this.setState(() =>this.intialState);
    }

    submitSeat= event =>{
      event.preventDefault();

      const seat={
        address: this.state.address,
        floor: this.state.floor,
        available_spaces: this.state.available_spaces,
        seat_capacity: this.state.seat_capacity
      };

      axios.post("http://localhost:8080/api/admin/AddadminstrationOffice",seat)
               .then(response =>{
                 if(response.data !=null){
                    this.setState({"show":true, "method":"post"});
                    setTimeout(() => this.setState({
                      "show":false
                    }), 3000);
                    //alert("AdminstrationOffice Booked Successfully");
                  }
                  else{
                   this.setState({"show":false});
                  }
                 });

      this.setState(this.intialState);
    }
  

  seatChange= event=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  AdminList = () =>{
    return this.props.history.push("/mod");
  };

  updateAdminOffice= event =>{
    event.preventDefault();

    const seat={
      id: this.state.office_id,
      address: this.state.address,
      floor: this.state.floor,
      available_spaces: this.state.available_spaces,
      seat_capacity: this.state.seat_capacity
    };

      axios.put("http://localhost:8080/api/admin",seat)
               .then(response =>{
                 if(response.data !=null){
                   this.setState({"show":true, "method":"put"});
                   setTimeout(() => this.setState({
                     "show":false
                   }), 3000);
                   setTimeout(() => this.AdminList(), 3000);
                   //alert("Seat Booked Successfully");
                 }
                 else{
                  this.setState({"show":false});
                 }
                 });
            this.setState(this.intialState);

  };


  render() {
    const {address, floor, available_spaces, seat_capacity}=this.state;
    return (
      <div>
        <div style={{"display":this.state.show ? "block" : "none"}}>
        <MyToast show = {this.state.show} message = {this.state.method === "put" ? "AdminstrationOffice updated Successfully"  : "AdminstrationOffice Booked Successfully"} type="success"/>
         </div>  
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to the Online Organization AdminstrationOffices System</h3>
          <p>This Can be Accessible by Admin Department only.</p>
        </header>
      </div>
      <Form  className="card card-container" onSubmit={this.state.office_id ? this.updateAdminOffice : this.submitSeat} onReset={this.resetChange} id="AdminFormId"><h4><FontAwesomeIcon icon={this.state.office_id ? faEdit : faPlusSquare} />{this.state.office_id ? " Update AdminOffice-Booking" : " AdminstrationOffice-Booking"}</h4>
        <div>
                <div className="form-group">
                  <label htmlFor="name"><FontAwesomeIcon icon={faAddressCard} /> Address</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><FontAwesomeIcon icon={faStairs} /> Floor Details:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="floor"
                    value={floor}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address"><FontAwesomeIcon icon={faSearch} /> Available_Spaces</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="available_spaces"
                    value={available_spaces}
                    onChange={this.seatChange}
                    placeholder="Enter How many Spaces Left"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile"><FontAwesomeIcon icon={faMemory} /> Seat-Capacaity:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    name="seat_capacity"
                    value={seat_capacity}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block"><FontAwesomeIcon icon={faSave} /> {this.state.office_id ? "Update AdminOffice" : "Book AdminOffice"}</button>
                  <button type="reset" className="btn btn-secondary btn-block"><FontAwesomeIcon icon={faRefresh} /> Reset AdminstrationOffice</button>
                  <button type="button" className="btn btn-secondary btn-block" onClick={this.AdminList.bind()}><FontAwesomeIcon icon={faList} /> AdminsrationOfficeDetails List</button>
                </div>
        </div>
      </Form>   
      </div>
    );
  }
  
}
