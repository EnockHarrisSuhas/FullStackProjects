import React, { Component } from "react";
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,faTrash,faEdit
} from "@fortawesome/free-solid-svg-icons";

import MyToast from "./MyToast";

export default class BoardModerator extends Component {
  constructor(props){
    super(props)
    this.state={
        seats: []
    };
}

//Getting Details of the AdminsrationOfficeDetails by Axios.get
componentDidMount(){
    axios.get("http://localhost:8080/api/admin/AdminstrationOffices")
    .then(response=>response.data)
    .then((data)=>{
        this.setState({seats:data});
    });
}

//Deleting the AdminstrationOffice Details by Id by Axios.Delete

deleteAdminOffice = (seatId) => {
    //alert(seatId);
    axios.delete("http://localhost:8080/api/admin/AdminstrationOffice/"+seatId)
    .then(
        response =>{
            if(response.data != null){
                //alert("AdminstrationOffice Deleted Succesfuuly");
                this.setState({"show":true});
                setTimeout(() => this.setState({
                  "show":false
                }), 3000);
                this.setState(
                    {seats : this.state.seats.filter(seat => seat.office_id !== seatId)}
                );
            }
            else{
                this.setState({"show":false});
               }
        }
    );
};

render(){
    return(
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show = {this.state.show} message={"AdminOffice Deleted Successfully"} type="danger"/>
            </div>   
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header><h4><FontAwesomeIcon icon={faList} /> AdminstrationOffices List</h4></Card.Header>
        <Card.Body>
            <Table bordered hover striped variant="dark">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Floor</th>
                        <th>Available-Spaces</th>
                        <th>Seat-Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.seats.length === 0 ?
                    <tr align="center">
                    <td colSpan="4"> Booking Seats Available</td>
                    </tr> :
                    this.state.seats.map((seat)=>(
                        <tr key={seat.office_id}>
                            <td>{seat.address}</td>
                            <td>{seat.floor}</td>
                            <td>{seat.available_spaces}</td>
                            <td>{seat.seat_capacity}</td>
                            <td>
                                <ButtonGroup>
                                <Link to={"editAdmin/"+seat.office_id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{'  '}
                                <Button size="sm" variant="outline-danger" onClick={this.deleteAdminOffice.bind(this, seat.office_id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </Card.Body>
        </Card>
        </div>
    )
}
  
}
