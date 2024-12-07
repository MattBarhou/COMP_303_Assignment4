import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // Initialize state variables
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    city: "",
    phone: "",
  });

  // Navigate hook
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const errors = {};

    if (!formValues.firstName) errors.firstName = "First Name is required";
    if (!formValues.lastName) errors.lastName = "Last Name is required";
    if (!formValues.age || isNaN(formValues.age))
      errors.age = "Valid age is required";
    if (!formValues.gender) errors.gender = "Gender is required";
    if (!formValues.bloodGroup) errors.bloodGroup = "Blood Group is required";
    if (!formValues.city) errors.city = "City is required";
    if (!formValues.phone || formValues.phone.length < 10)
      errors.phone = "Valid phone number is required";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Send form data to the server
    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      // Check if the server responded with a success status
      if (response.ok) {
        alert("Registration successful!");
        setFormValues({
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          bloodGroup: "",
          city: "",
          phone: "",
        });
        navigate("/main");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Return the form component
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        width: 400,
        marginRight: "150px",
        backgroundColor: "#424242",
        color: "white",
        mt: 6, // Adds a gap between the two components
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="First Name"
          name="firstName"
          variant="filled"
          required
          fullWidth
          value={formValues.firstName}
          onChange={handleInputChange}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="filled"
          required
          fullWidth
          value={formValues.lastName}
          onChange={handleInputChange}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="Age"
          name="age"
          variant="filled"
          type="number"
          required
          fullWidth
          value={formValues.age}
          onChange={handleInputChange}
          error={!!formErrors.age}
          helperText={formErrors.age}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="Gender"
          name="gender"
          variant="filled"
          required
          fullWidth
          select
          value={formValues.gender}
          onChange={handleInputChange}
          error={!!formErrors.gender}
          helperText={formErrors.gender}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
        <TextField
          label="Blood Group"
          name="bloodGroup"
          variant="filled"
          required
          fullWidth
          value={formValues.bloodGroup}
          onChange={handleInputChange}
          error={!!formErrors.bloodGroup}
          helperText={formErrors.bloodGroup}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="City"
          name="city"
          variant="filled"
          required
          fullWidth
          value={formValues.city}
          onChange={handleInputChange}
          error={!!formErrors.city}
          helperText={formErrors.city}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="Phone"
          name="phone"
          variant="filled"
          type="tel"
          required
          fullWidth
          value={formValues.phone}
          onChange={handleInputChange}
          error={!!formErrors.phone}
          helperText={formErrors.phone}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
      </Box>
    </Paper>
  );
};

export default Register;
