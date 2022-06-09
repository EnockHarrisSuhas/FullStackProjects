import React, { Component } from "react";

//import UserService from "../services/user.service";

export default class Home extends Component {
 /* constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }*/

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Online Organization Seat-Booking System</h3>
          <p>
          Every organization provides a space (seat) for the users to use. To make a seat 
          reservation, the user will need to record their booking in a log book. This logistics 
          requires a lot of manual work to maintain the records, which tends to be an error prone 
          approach. Hence, some automated approach is preferred, and the organization would 
          like to have a seat booking system to improve the situation.
          Using the seat booking system, user can first check the availability of their preferred 
          seat, and make the corresponding bookings online. The admin can check the booking 
          status of the seat and have appropriate arrangements for the bookings. In addition, 
          users can also view their booking histories via the interface. With this seat booking 
          system user can instantly schedule desks, manage bookings and locate neighbourhoods 
          and colleagues.
          </p>
        </header>
      </div>
    );
  }
}
