package com.bezkoder.springjwt.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.Exceptions.ResourceNotFoundException;
import com.bezkoder.springjwt.models.SeatBooking;
import com.bezkoder.springjwt.services.AdminServiceI;
import com.bezkoder.springjwt.repository.SeatBookingRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/seatbooking")
public class SeatBookingController implements Resource<SeatBooking> {
	
	@Autowired
	SeatBookingRepository seatBookingRepo;
	
	@Autowired
	AdminServiceI<SeatBooking> seatService;
	
	@GetMapping("/SeatBookings")
	public List<SeatBooking> getAllSeatBookings() {
		return seatBookingRepo.findAll();
	}

	@GetMapping("/SeatBooking/{id}")
	public ResponseEntity<SeatBooking> getSeatBookingById(@PathVariable(value = "id") Long seatId)
			throws ResourceNotFoundException {
		SeatBooking seat = seatBookingRepo.findById(seatId)
				.orElseThrow(() -> new ResourceNotFoundException("Seat not found for this id :: " + seatId));
		return ResponseEntity.ok().body(seat);
	}

	@PostMapping("/AddSeatBooking")
	public SeatBooking createSeatBooking( @RequestBody SeatBooking seat) {
		return seatBookingRepo.save(seat);
	}
		/*SeatBooking adminstrationOffice = seatBookingRepo.findById(seatId)
				.orElseThrow(() -> new ResourceNotFoundException("Seat not found for this id :: " + seatId));
		
		adminstrationOffice.setName(seat.getName());
		adminstrationOffice.setAddress(seat.getAddress());
		adminstrationOffice.setEmail(seat.getEmail());
		adminstrationOffice.setMobile(seat.getMobile());
		adminstrationOffice.setSeats(seat.getSeats());
		final SeatBooking updatedSeatBooking = seatBookingRepo.save(adminstrationOffice);
		return ResponseEntity.ok(updatedSeatBooking);*/

	@DeleteMapping("/SeatBooking/{id}")
	public Map<String, Boolean> deleteSeatBooking(@PathVariable(value = "id") Long seatId)
			throws ResourceNotFoundException {
		SeatBooking seat = seatBookingRepo.findById(seatId)
				.orElseThrow(() -> new ResourceNotFoundException("Seat not found for this id :: " + seatId));

		seatBookingRepo.delete(seat);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

		@Override
		public ResponseEntity<SeatBooking> update(SeatBooking seat) {
			return new ResponseEntity<>(seatService.SaveorUpdate(seat), HttpStatus.OK);
		}

}
