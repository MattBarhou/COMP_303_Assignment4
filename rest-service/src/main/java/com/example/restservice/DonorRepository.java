package com.example.restservice;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DonorRepository extends JpaRepository<Donor, Integer> {
    //Find by phone
    Optional<Donor> findByPhone(String phone);
}
