package com.bezkoder.springjwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="seat_booking")
public class SeatBooking {
	
	@Id
	@GeneratedValue
	private Long seat_id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String mobile;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private Integer seats;
	
	public Long getSeat_id() {
		return seat_id;
	}

	public void setSeat_id(Long seat_id) {
		this.seat_id = seat_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getSeats() {
		return seats;
	}

	public void setSeats(Integer seats) {
		this.seats = seats;
	}
	
}
