#FOR AUTHENTICATION

#SIGN IN
http://localhost:8080/api/auth/signin

{
	"username":"Helen",
    "password":"helen17"
}

#SIGN UP
http://localhost:8080/api/auth/signup

{
	"username":"Helen",
    "email":"helen@gmail.com",
    "password":"helen17"
}

#FOR ADMINSTRATION

#GET ADMINSTRATION
http://localhost:8080/api/admin/AdminstrationOffices

#GET By ID
http://localhost:8080/api/admin/AdminstrationOffice/{id}

#POST
http://localhost:8080/api/admin/AddadminstrationOffice

#PUT
http://localhost:8080/api/admin

#DELETE
http://localhost:8080/api/admin/AdminstrationOffice/{id}

#Requests
{
    "office_id":140,
	"address":"Kochi",
    "available_spaces":15,
    "floor":"L2",
    "seat_capacity":100
}
-----------------------------------------------------------------------------------------
#FOR SEAT-BOOKING


#GET SEAT-BOOKING
http://localhost:8080/api/seatbooking/SeatBookings

#GET By ID
http://localhost:8080/api/seatbooking/SeatBooking/{id}

#POST
http://localhost:8080/api/seatbooking/AddSeatBooking

#PUT
http://localhost:8080/api/seatbooking

{
	"seat_id": 140,
	"name":"SUHAS",
	"email":"suhas@gmail.com",
	"address":"Kochi",
    "seats":5,
    "mobile":"56462354"
}

#DELETE
http://localhost:8080/api/seatbooking/SeatBooking/{id}

#Requests
{
	"name":"SUHAS",
	"email":"suhas@gmail.com",
	"address":"Kochi",
    "seats":5,
    "mobile":"56462354"
}
