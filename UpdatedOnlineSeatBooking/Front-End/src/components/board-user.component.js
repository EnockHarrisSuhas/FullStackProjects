import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser, faAddressCard, faPhone, faSearch, faSave, faRedo, faList, faPlusSquare, faEdit} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import MyToast from "./MyToast";
/*
import { Card, Form, Button, Col, InputGroup } from "react-bootstrap";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";*/

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.state={
      addresss:[],
      show:false
    };
    this.seatChange=this.seatChange.bind(this);
    this.submitSeat=this.submitSeat.bind(this);
  }
    
    intialState =
    {
      seat_id: "",
      name: "",
      email: "",
      address:"",
      seats: "",
      mobile: "",
    };

    componentDidMount(){
      const seatId= +this.props.match.params.seat_id;
      if(seatId){
        this.findSeatById(seatId);
      }
      this.findAllLocations();
    }

    findAllLocations= () =>{
      axios.get("http://localhost:8080/api/seatbooking/locations")
      .then(response =>response.data)
      .then((data)=>{
        this.setState({
          addresss:[{value:'',display:'Select Location From Dropdown List'}]
          .concat(data.map(address =>{
            return{value:address,display:address}
          }))
        });
      });
    };

    findSeatById = (seatId) => {
      axios.get("http://localhost:8080/api/seatbooking/SeatBooking/"+seatId)
      .then(response =>
        {
          if(response.data != null){
            this.setState({
              seat_id :response.data.seat_id,
              name: response.data.name,
              email: response.data.email,
              address: response.data.address,
              seats: response.data.seats,
              mobile: response.data.mobile
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
        seat_id:this.state.seat_id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        seats: this.state.seats,
        mobile: this.state.mobile
      };

      axios.post("http://localhost:8080/api/seatbooking/AddSeatBooking",seat)
               .then(response =>{
                 if(response.data !=null){
                   this.setState({"show":true, "method":"post"});
                   setTimeout(() => this.setState({
                     "show":false
                   }), 3000);
                   //alert("Seat Booked Successfully");
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

  seatList=() =>{
    return this.props.history.push("/seatBookingList");
  };

  updateSeat= event =>{
    event.preventDefault();

      const seat={
        seat_id:this.state.seat_id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        seats: this.state.seats,
        mobile: this.state.mobile
      };

      axios.put("http://localhost:8080/api/seatbooking",seat)
               .then(response =>{
                 if(response.data !=null){
                   this.setState({"show":true, "method":"put"});
                   setTimeout(() => this.setState({
                     "show":false
                   }), 3000);
                   setTimeout(() => this.seatList(), 3000);
                   //alert("Seat Booked Successfully");
                 }
                 else{
                  this.setState({"show":false});
                 }
                 });
            this.setState(this.intialState);

  };


  render() {
    const {name, email, address, mobile, seats}=this.state;
    return (
      <div>
        <div style={{"display":this.state.show ? "block" : "none"}}>
          <MyToast show = {this.state.show} message = {this.state.method === "put" ? "Seat updated Successfully"  : "Seat Booked Successfully"} type="success"/>
        </div>
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to the Online Organization Seat-Booking System</h3>
        </header>
      </div>
      <Form  className="card card-container" onSubmit={this.state.seat_id ? this.updateSeat : this.submitSeat} onReset={this.resetChange} id="seatFormId"><h4><FontAwesomeIcon icon={this.state.seat_id ? faEdit : faPlusSquare} />{this.state.seat_id ? " Update Seat-Booking" : " Seat-Booking"}</h4>
        <div>
                <div className="form-group">
                  <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> Name</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address"><FontAwesomeIcon icon={faAddressCard} /> Address</label>
                  <select name="address" value={address} onChange={this.seatChange} required>
                  {this.state.addresss.map(address =>
                      <option key={address.value} value={address.value}>
                        {address.display}
                      </option>
                    )}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mobile"><FontAwesomeIcon icon={faPhone} /> Mobile No:</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    name="mobile"
                    value={mobile}
                    onChange={this.seatChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="seats"><FontAwesomeIcon icon={faSearch} /> Seats</label>
                  <Input
                    required 
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="seats"
                    value={seats}
                    onChange={this.seatChange}
                    placeholder="enter how many seats to Book"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block"><FontAwesomeIcon icon={faSave} />{this.state.seat_id ? "Update Seat" : "Book Seat"}</button>
                  <button type="reset" className="btn btn-secondary btn-block"><FontAwesomeIcon icon={faRedo} /> Reset Seat</button>
                  <button type="button" className="btn btn-secondary btn-block" onClick={this.seatList.bind()}><FontAwesomeIcon icon={faList} /> SeatBooking List</button>
                </div>
        </div>
      </Form>   
      </div>
    );
  }
}
