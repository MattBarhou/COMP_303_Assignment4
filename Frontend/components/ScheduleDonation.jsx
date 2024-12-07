import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ScheduleDonation() {
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    alert(`Blood donation scheduled for ${date}`);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h2>Schedule a Blood Donation</h2>
      <TextField
        label="Select Date"
        type="date"
        value={date}
        variant="standard"
        onChange={(e) => setDate(e.target.value)}
        margin="normal"
        sx={{
          input: { color: "white", backgroundColor: "#616161" },
          label: { color: "white" },
          width: "15%",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, width: "10%" }}
        onClick={handleSubmit}
      >
        Schedule
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: "10%" }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </Box>
  );
}
