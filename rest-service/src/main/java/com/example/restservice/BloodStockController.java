package com.example.restservice;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/bloodstocks")
public class BloodStockController {

    @Autowired
    private BloodStockRepository bloodStockRepository;

    @GetMapping
    public Iterable<BloodStock> getBloodStocks() {
        return bloodStockRepository.findAll(); // Get all blood stocks
    }

    @GetMapping("/{id}")
    public BloodStock getBloodStock(@PathVariable Integer id) {

        if (id == null) { // Validate ID
            throw new IllegalArgumentException("ID is required.");
        }

        return bloodStockRepository.findById(id).orElse(null); // Get blood stock by ID
    }

    @PostMapping
    public ResponseEntity<BloodStock> addBloodStock(@RequestBody BloodStock bloodStock) {

        if (bloodStock == null) { // Validate blood stock
            throw new IllegalArgumentException("Blood stock is required.");
        }

        BloodStock newBloodStock = bloodStockRepository.save(bloodStock); // Add new blood stock
        return ResponseEntity.ok(newBloodStock); // Add new blood stock
    }

    @PutMapping("/{id}")
    public BloodStock updateBloodStock(@PathVariable Integer id, @Valid @RequestBody BloodStock bloodStock) {
        BloodStock existingBloodStock = bloodStockRepository.findById(id).orElse(null); // Get blood stock by ID

        if (existingBloodStock == null) {
            throw new IllegalArgumentException("Blood stock not found.");
        }

        // update the blood stock
        existingBloodStock.setBloodGroup(bloodStock.getBloodGroup());
        existingBloodStock.setQuantity(bloodStock.getQuantity());
        existingBloodStock.setBestBefore(bloodStock.getBestBefore());
        existingBloodStock.setStatus(bloodStock.getStatus());

        return bloodStockRepository.save(existingBloodStock);
    }
}
