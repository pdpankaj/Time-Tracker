package com.allianz.service.exceptions;

public class DuplicateUserException extends Exception {
    public DuplicateUserException(String username) {
        super(String.format("User with username %s already exists", username));
    }
}
