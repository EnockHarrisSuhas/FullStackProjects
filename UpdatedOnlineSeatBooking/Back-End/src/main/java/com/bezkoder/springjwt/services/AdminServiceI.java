package com.bezkoder.springjwt.services;


public interface AdminServiceI<T> {
	
	T SaveorUpdate(T t);
}
