package com.allianz.model;

import java.time.LocalDateTime;

public class TimeEntry {

    private int id;

    private LocalDateTime startTime;

    private LocalDateTime stopTime;

    public int getId() {
        return id;
    }

    public void setId(final int id) {
        this.id = id;
    }
    
    public TimeEntry start() {
        this.startTime = LocalDateTime.now();
        return this;
    }

    public void stop() {
        this.stopTime = LocalDateTime.now();
    }

    public LocalDateTime getStartTime() {
        return this.startTime;
    }

    public LocalDateTime getStopTime() {
        return this.stopTime;
    }

}
