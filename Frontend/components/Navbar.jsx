import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#424242", mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blood Bank Management
        </Typography>
        <Button color="inherit" onClick={handleMenuClick}>
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/donor-details"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View Donor Details
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/schedule-donation"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Schedule Blood Donation
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link
              to="/donation-history"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Donor History
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
