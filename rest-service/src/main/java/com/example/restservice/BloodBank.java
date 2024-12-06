package com.example.restservice;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "BloodBank")
public class BloodBank {

    @Id
    @Column(name = "BloodBankID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bloodBankId;

    @Column(name = "BloodbankName")
    @NotBlank(message = "Blood bank name is required.")
    @Size(max = 100, message = "Blood bank name must not exceed 100 characters.")
    private String bloodbankName;

    @Column(name = "Address")
    @NotBlank(message = "Address is required.")
    @Size(max = 255, message = "Address must not exceed 255 characters.")
    private String address;

    @Column(name = "City")
    @NotBlank(message = "City is required.")
    @Size(max = 100, message = "City must not exceed 100 characters.")
    private String city;

    @Column(name = "Phone")
    @NotBlank(message = "Phone is required.")
    @Pattern(regexp = "^[0-9]+$", message = "Phone number must contain only digits.")
    private String phone;

    @Column(name = "Website")
    @Size(max = 200, message = "Website URL must not exceed 200 characters.")
    private String website;

    @Column(name = "Email")
    @Email(message = "Email must be a valid email address.")
    @Size(max = 100, message = "Email must not exceed 100 characters.")
    private String email;


    // Constructors
    public BloodBank() {
    }

    public BloodBank(Integer bloodBankId, String bloodbankName, String address, String city, String phone, String website, String email) {
        this.bloodBankId = bloodBankId;
        this.bloodbankName = bloodbankName;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.website = website;
        this.email = email;
    }


    // Getters and Setters

    public Integer getBloodBankId() {
        return bloodBankId;
    }

    public void setBloodBankId(Integer bloodBankId) {
        this.bloodBankId = bloodBankId;
    }

    public String getBloodbankName() {
        return bloodbankName;
    }

    public void setBloodbankName(String bloodbankName) {
        this.bloodbankName = bloodbankName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
