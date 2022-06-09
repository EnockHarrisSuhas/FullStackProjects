import axios from "axios";

const API_URL = "http://localhost:8080/api/seatbooking/";

class seatbookingService{
    seatbooking(name,email,address,mobile,seats){
        return axios
        .post(API_URL + "AddSeatBooking",{
            name,
            email,
            address,
            mobile,
            seats
        });
    }
}

export default new seatbookingService();