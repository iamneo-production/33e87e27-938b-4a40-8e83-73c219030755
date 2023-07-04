package com.example.springapp.exception;

public class ResourceNotFoundException extends RuntimeException {

  public ResourceNotFoundException(String msg) {
    super(msg);
  }
}