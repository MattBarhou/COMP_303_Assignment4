package com.example.restservice;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/donors")
public class DonorController {

    @Autowired
    private DonorRepository donorRepository;

   @GetMapping
    public Iterable<Donor> getDonors() {
        return donorRepository.findAll(); // Get all donors
    }

    @GetMapping("/{id}")
    public Donor getDonor(@PathVariable Integer id) {

        if (id == null) { // Validate ID
            throw new IllegalArgumentException("ID is required.");
        }

        return donorRepository.findById(id).orElse(null); // Get donor by ID
    }

    @PostMapping
    public ResponseEntity<Donor> addDonor(@RequestBody Donor donor) {

        Donor newDonor = donorRepository.save(donor); // Add new donor
        return ResponseEntity.ok(newDonor);
    }

    @PutMapping("/{id}")
    public Donor updateDonor(@PathVariable Integer id, @Valid @RequestBody Donor donor) {
        Donor existingDonor = donorRepository.findById(id).orElse(null); // Get donor by ID

        if (existingDonor == null) {
            throw new IllegalArgumentException("Donor not found.");
        }

        // update the donor
        existingDonor.setFirstName(donor.getFirstName());
        existingDonor.setLastName(donor.getLastName());
        existingDonor.setAge(donor.getAge());
        existingDonor.setGender(donor.getGender());
        existingDonor.setBloodGroup(donor.getBloodGroup());
        existingDonor.setCity(donor.getCity());
        existingDonor.setPhone(donor.getPhone());

        return donorRepository.save(existingDonor);
    }

}
