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
import com.bezkoder.springjwt.models.AdminOffice;
import com.bezkoder.springjwt.repository.AdminRepository;
import com.bezkoder.springjwt.services.AdminOfficeService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
public class AdminController implements Resource<AdminOffice> {
	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	AdminOfficeService adminServices;
	
	@GetMapping("/AdminstrationOffices")
	public List<AdminOffice> getAllAdminstrationOffice() {
		return adminRepo.findAll();
	}

	@GetMapping("/AdminstrationOffice/{id}")
	public ResponseEntity<AdminOffice> getEmployeeById(@PathVariable(value = "id") Long officeId)
			throws ResourceNotFoundException {
		AdminOffice adminstrationOffice = adminRepo.findById(officeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + officeId));
		return ResponseEntity.ok().body(adminstrationOffice);
	}

	@PostMapping("/AddadminstrationOffice")
	public AdminOffice createAdminstrationOffice( @RequestBody AdminOffice adminstrationOffice) {
		return adminRepo.save(adminstrationOffice);
	}

	/*@PutMapping("/AdminstrationOffice/{id}")
	public ResponseEntity<AdminOffice> updateadminstrationOffice(@PathVariable(value = "id") Long officeId,
		 @RequestBody AdminOffice adminstrationOfficeDetails) throws ResourceNotFoundException {
		AdminOffice adminstrationOffice = adminRepo.findById(officeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + officeId));
		
		adminstrationOffice.setAddress(adminstrationOfficeDetails.getAddress());
		adminstrationOffice.setAvailable_spaces(adminstrationOfficeDetails.getAvailable_spaces());
		adminstrationOffice.setFloor(adminstrationOfficeDetails.getFloor());
		adminstrationOfficeDetails.setSeat_capacity(adminstrationOfficeDetails.getSeat_capacity());
		final AdminOffice updatedEmployee = adminRepo.save(adminstrationOffice);
		return ResponseEntity.ok(updatedEmployee);
	}*/

	@DeleteMapping("/AdminstrationOffice/{id}")
	public Map<String, Boolean> deleteAdminstrationOffice(@PathVariable(value = "id") Long officeId)
			throws ResourceNotFoundException {
		AdminOffice adminOffice = adminRepo.findById(officeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + officeId));

		adminRepo.delete(adminOffice);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public ResponseEntity<AdminOffice> update(AdminOffice t) {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(adminServices.SaveorUpdate(t), HttpStatus.OK);
	}

}
