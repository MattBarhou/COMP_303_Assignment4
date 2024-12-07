import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DonorDetails() {
  const [donor, setDonor] = useState({
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    bloodGroup: "O+",
    city: "New York",
    phone: "1234567890",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonor({ ...donor, [name]: value });
  };

  const updateDonorDetails = async () => {
    const response = await fetch(
      `http://localhost:8081/api/donors/${donor.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      }
    );

    if (response.ok) {
      alert("Donor details updated successfully!");
    } else {
      alert("Failed to update donor details");
    }
  };

  const handleSave = () => {
    updateDonorDetails();
  };

  return (
    <Box sx={{ p: 3 }}>
      <h2>View and Edit Donor Details</h2>
      <form>
        {Object.keys(donor).map((field) => (
          <TextField
            key={field}
            label={field.replace(/([A-Z])/g, " $1")}
            name={field}
            value={donor[field]}
            onChange={handleInputChange}
            variant="filled"
            fullWidth
            sx={{
              input: { color: "white", backgroundColor: "#616161" },
              label: { color: "white" },
            }}
            margin="normal"
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </form>
    </Box>
  );
}
