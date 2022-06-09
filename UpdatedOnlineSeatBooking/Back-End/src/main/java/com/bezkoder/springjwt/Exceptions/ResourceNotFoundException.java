package com.bezkoder.springjwt.Exceptions;

public class ResourceNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3329097522931973873L;
	public ResourceNotFoundException(String message){
    	super(message);
	}

}
