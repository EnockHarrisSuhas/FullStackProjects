package com.bezkoder.springjwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin_offices")
public class AdminOffice {
	
	@Id
	@GeneratedValue
	private Long office_id;
	
	@Column(nullable = false)
	private Integer seat_capacity;
	
	@Column(nullable = false)
	private Integer available_spaces;
	
	@Column(nullable = false)
	private String floor;
	
	@Column(nullable = false)
	private String address;
	
	public Long getOffice_id() {
		return office_id;
	}
	public void setOffice_id(Long office_id) {
		this.office_id = office_id;
	}
	public Integer getSeat_capacity() {
		return seat_capacity;
	}
	public void setSeat_capacity(Integer seat_capacity) {
		this.seat_capacity = seat_capacity;
	}
	public Integer getAvailable_spaces() {
		return available_spaces;
	}
	public void setAvailable_spaces(Integer available_spaces) {
		this.available_spaces = available_spaces;
	}
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
