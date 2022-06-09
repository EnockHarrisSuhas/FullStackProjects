import React ,{Component} from "react";
import { Link } from "react-router-dom";
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,faTrash,faEdit
} from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";

export default class SeatBookingList extends Component{
    constructor(props){
        super(props)
        this.state={
            seats: []
        };
    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/seatbooking/SeatBookings")
        .then(response=>response.data)
        .then((data)=>{
            this.setState({seats:data});
        });
    }

    deleteSeat = (seatId) =>{
        //alert(seatId);
        axios.delete("http://localhost:8080/api/seatbooking/SeatBooking/"+seatId)
    .then(
        response =>{
            if(response.data != null){
                //alert("Seat Deleted Succesfuuly");
                this.setState({"show":true});
                setTimeout(() => this.setState({
                  "show":false
                }), 3000);
                this.setState(
                    {seats : this.state.seats.filter(seat => seat.seat_id !== seatId)}
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
                <MyToast show = {this.state.show} message={"Seat Deleted Successfully"} type="danger"/>
            </div>  
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><h4><FontAwesomeIcon icon={faList} /> Seat-Booking List</h4></Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Mobile No</th>
                            <th>Seats</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.seats.length === 0 ?
                        <tr align="center">
                        <td colSpan="5"> Booking Seats Available</td>
                        </tr> :
                        this.state.seats.map((seat)=>(
                            <tr key={seat.seat_id}>
                                <td>{seat.name}</td>
                                <td>{seat.email}</td>
                                <td>{seat.address}</td>
                                <td>{seat.mobile}</td>
                                <td>{seat.seats}</td>
                                <td>
                                    <ButtonGroup>
                                        <Link to={"edit/"+seat.seat_id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{'  '}
                                        <Button size="sm" variant="outline-danger" onClick={this.deleteSeat.bind(this, seat.seat_id)}><FontAwesomeIcon icon={faTrash} /></Button>
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