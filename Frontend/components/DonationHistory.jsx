import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DonationHistory() {
  const [donationHistory, setDonationHistory] = useState([]);

  const navigate = useNavigate();

  const fetchDonationHistory = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/donors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setDonationHistory(data);
    } catch (error) {
      console.error("Error fetching donation history: ", error);
    }
  };

  useEffect(() => {
    fetchDonationHistory();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#303030", // Dark background
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          maxWidth: 800,
          p: 3,
          backgroundColor: "#424242",
          color: "white",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Blood Donation History
        </Typography>
        {donationHistory.length > 0 ? (
          <List>
            {donationHistory.map((donation, index) => (
              <ListItem
                key={index}
                sx={{
                  mb: 1,
                  backgroundColor: "#616161",
                  borderRadius: 1,
                  padding: 2,
                  "&:hover": {
                    backgroundColor: "#757575",
                  },
                }}
              >
                <ListItemText
                  primary={`ID: ${donation.donorID} - Blood Group: ${donation.bloodGroup}`}
                  secondary={`Donor: ${donation.firstName} ${donation.lastName}, Age: ${donation.age}`}
                  sx={{
                    color: "white",
                  }}
                  secondaryTypographyProps={{ style: { color: "white" } }}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography align="center" sx={{ mt: 3 }}>
            No donation history available.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
}
