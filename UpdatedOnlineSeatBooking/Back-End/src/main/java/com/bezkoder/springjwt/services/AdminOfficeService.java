package com.bezkoder.springjwt.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.AdminOffice;
import com.bezkoder.springjwt.repository.AdminRepository;

@Service
public class AdminOfficeService implements AdminServiceI<AdminOffice> {

	@Autowired
	AdminRepository adminRepo;
	
	@Override
	public AdminOffice SaveorUpdate(AdminOffice admin) {
		// TODO Auto-generated method stub
		return adminRepo.save(admin);
	}

}
