import React from "react";
import { AppBar, Avatar, Box, Button, Toolbar } from "@mui/material";
import employeeImage from "../../assets/images/employeeImages/employee01.jpg";
import LogoImage from "../../../public/LogoImage.png";
import SettingsIcon from "@mui/icons-material/Settings";
import "../../../src/index.css";

const NavBar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "white",
      }}
    >
      <Toolbar
        sx={{
          boxShadow: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={LogoImage} className="cursor-pointer" />

        <Box className=" w-[8rem] h-[4rem] bg-blue-200 flex justify-center items-center rounded-full gap-1">
          <Avatar>
            {" "}
            <img
              src={employeeImage}
              className="w-12 h-12 object-cover rounded-full cursor-pointer"
            />
          </Avatar>
          <Button variant="text">
            <SettingsIcon fontSize="large" className="" />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
