import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    id: "",
    lastName: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const errors = {};

    if (!formValues.id || isNaN(formValues.id) || formValues.donorId < 0) {
      errors.donorId = "Valid Donor ID is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formValues.id,
          lastName: formValues.lastName,
        }),
      });

      if (response.ok) {
        alert("Login successful!");
        setFormValues({ id: "", lastName: "" });
        navigate("/main");
      } else {
        alert("Invalid Donor ID or Last Name.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        width: 400,
        mt: 8,
        marginLeft: "150px",
        backgroundColor: "#424242",
        color: "white",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Login
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
          label="Donor ID"
          name="id"
          variant="filled"
          type="number"
          required
          fullWidth
          value={formValues.id}
          onChange={handleInputChange}
          error={!!formErrors.donorId}
          helperText={formErrors.donorId}
          sx={{
            input: { color: "white", backgroundColor: "#616161" },
            label: { color: "white" },
          }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="filled"
          type="password"
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
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
