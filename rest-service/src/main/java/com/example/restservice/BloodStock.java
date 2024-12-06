package com.example.restservice;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "BloodStock")
public class BloodStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StockID")
    private Integer StockID;

    @Column(name = "BloodGroup")
    @NotBlank(message = "Blood group is required.")
    @Size(max = 3, message = "Blood group must not exceed 3 characters.") // e.g., A+, O-
    private String bloodGroup;

    @Column(name = "Quantity")
    @Min(value = 0, message = "Quantity must be a positive number.")
    private Integer quantity;

    @Column(name = "BestBefore")
    @NotNull(message = "Best before date is required.")
    private java.time.LocalDate bestBefore;

    @Column(name = "Status")
    @NotBlank(message = "Status is required.")
    @Size(max = 20, message = "Status must not exceed 20 characters.") // e.g., Available, Reserved
    private String status;


    // Constructors

    public BloodStock() {
    }

    public BloodStock(Integer stockId, String bloodGroup, Integer quantity, java.time.LocalDate bestBefore, String status) {
        this.StockID = stockId;
        this.bloodGroup = bloodGroup;
        this.quantity = quantity;
        this.bestBefore = bestBefore;
        this.status = status;
    }

    // Getters and Setters

    public Integer getStockId() {
        return StockID;
    }

    public void setStockId(Integer stockId) {
        this.StockID = stockId;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public java.time.LocalDate getBestBefore() {
        return bestBefore;
    }

    public void setBestBefore(java.time.LocalDate bestBefore) {
        this.bestBefore = bestBefore;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
