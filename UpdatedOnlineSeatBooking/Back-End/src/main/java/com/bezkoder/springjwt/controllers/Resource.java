package com.bezkoder.springjwt.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface Resource<T> {
	
	@SuppressWarnings("deprecation")
	@PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	ResponseEntity<T> update(@RequestBody T t);
}
