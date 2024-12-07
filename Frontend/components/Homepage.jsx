import { Box, Container, Typography } from "@mui/material";
import Register from "./Register";
import Login from "./Login";

function Homepage() {
  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Welcome!</Typography>
      </Container>

      {/* Forms */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Register />
        <Typography variant="h1" sx={{ mx: 1 }}>
          Or
        </Typography>
        <Login />
      </Box>
    </>
  );
}

export default Homepage;
