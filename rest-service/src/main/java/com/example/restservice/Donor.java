package com.example.restservice;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "Donor")
public class Donor {
    @Id
    @Column(name = "DonorID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer donorID;

    @Column(name = "FirstName")
    @NotBlank(message = "First name is required.")
    @Size(max = 50, message = "First name must not exceed 50 characters.")
    private String firstName;

    @Column(name = "LastName")
    @NotBlank(message = "Last name is required.")
    @Size(max = 50, message = "Last name must not exceed 50 characters.")
    private String lastName;

    @Column(name = "Age")
    @Min(value = 0, message = "Age must be positive.")
    @Max(value = 150, message = "Age must be realistic.")
    private Integer age;

    @Column(name = "Gender")
    @NotBlank(message = "Gender is required.")
    @Size(max = 10, message = "Gender must not exceed 10 characters.")
    private String gender;

    @Column(name = "BloodGroup")
    @NotBlank(message = "Blood group is required.")
    @Size(max = 3, message = "Blood group must not exceed 3 characters.")
    private String bloodGroup;

    @Column(name = "City")
    @NotBlank(message = "City is required.")
    @Size(max = 100, message = "City must not exceed 100 characters.")
    private String city;

    @Column(name = "Phone")
    @NotBlank(message = "Phone number is required.")
    @Pattern(regexp = "^[0-9]+$", message = "Phone number must contain only digits.")
    @Size(max = 15, message = "Phone number must not exceed 15 digits.")
    private String phone;


    // Constructors

    public Donor() {
    }

    public Donor(Integer donorID, String firstName, String lastName, Integer age, String gender, String bloodGroup, String city, String phone) {
        this.donorID = donorID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
        this.city = city;
        this.phone = phone;
    }


    // Getters and Setters

    public Integer getDonorID() {
        return this.donorID;
    }

    public void setDonorID(Integer donorID) {
        this.donorID = donorID;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBloodGroup() {
        return this.bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

