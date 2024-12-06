package com.example.restservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api/auth")
public class AuthController {

    //Donor Repository
    @Autowired
    private DonorRepository donorRepository;

    // Register endpoint
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Donor donor) {
        // Check if donor already exists
        Optional<Donor> existingDonor = donorRepository.findByPhone(donor.getPhone());
        if (existingDonor.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Donor already exists.");
        }

        // Save the donor
        donorRepository.save(donor);
        return ResponseEntity.ok("Donor registered successfully!");
    }

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Optional<Donor> donor = donorRepository.findById(loginRequest.getId());

        if (donor.isPresent() && donor.get().getLastName().equals(loginRequest.getLastName())) {
                return ResponseEntity.ok("Login successful!");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials, please try again.");
    }


    // DTO for login
    static class LoginRequest {
        private Integer id;
        private String lastName;

        // Getters and Setters
        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }
    }

}
