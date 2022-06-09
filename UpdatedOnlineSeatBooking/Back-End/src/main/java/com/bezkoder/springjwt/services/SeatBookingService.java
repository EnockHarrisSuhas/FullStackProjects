package com.bezkoder.springjwt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.SeatBooking;
import com.bezkoder.springjwt.repository.SeatBookingRepository;

@Service
public class SeatBookingService implements AdminServiceI<SeatBooking> {
	
	@Autowired
	SeatBookingRepository seatRepo;

	@Override
	public SeatBooking SaveorUpdate(SeatBooking seat) {
		// TODO Auto-generated method stub
		return seatRepo.save(seat);
	}

}
