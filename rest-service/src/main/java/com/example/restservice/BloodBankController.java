package com.example.restservice;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/bloodbanks")
public class BloodBankController {
    
    @Autowired
    private BloodBankRepository bloodBankRepository;

    @GetMapping
    public Iterable<BloodBank> getBloodBanks() {
        return bloodBankRepository.findAll(); // Get all donors
    }

    @GetMapping("/{id}")
    public BloodBank getBloodbank(@PathVariable Integer id) {

        if (id == null) { // Validate ID
            throw new IllegalArgumentException("ID is required.");
        }

        return bloodBankRepository.findById(id).orElse(null); // Get bloodbank by ID
    }

    @PostMapping
    public ResponseEntity<BloodBank> addBloodbank(@RequestBody BloodBank bloodbank) {

        BloodBank newBloodbank = bloodBankRepository.save(bloodbank); // Add new bloodbank
        return ResponseEntity.ok(newBloodbank);
    }

    @PutMapping("/{id}")
    public BloodBank updateBloodbank(@PathVariable Integer id, @Valid @RequestBody BloodBank bloodbank) {
        BloodBank existingBloodbank = bloodBankRepository.findById(id).orElse(null); // Get bloodbank by ID

        if (existingBloodbank == null) {
            throw new IllegalArgumentException("Donor not found.");
        }

        // update the donor
        existingBloodbank.setBloodbankName(bloodbank.getBloodbankName());
        existingBloodbank.setAddress(bloodbank.getAddress());
        existingBloodbank.setCity(bloodbank.getCity());
        existingBloodbank.setPhone(bloodbank.getPhone());
        existingBloodbank.setWebsite(bloodbank.getWebsite());
        existingBloodbank.setEmail(bloodbank.getEmail());

        return bloodBankRepository.save(existingBloodbank);
    }
}
