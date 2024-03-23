import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CallIcon from '@mui/icons-material/Call';
import Grid from '@mui/material/Grid';

// import logo from "./../../assests/logo.png"
import logo1 from "./../../assests/Head Logo1.png"
import logo2 from "./../../assests/Travel.png"

export default function Navigation() {

  return (
    <div className="header" style={{ width: "100%" }}>
      {/* <h1>Navigation</h1> */}

      <AppBar position="static">
        <Toolbar>
          
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black" }}>
            Track2ceylon
          </Typography> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"white" }}>
            Virtual tours Guidence
          </Typography>
          <CallIcon
            sx={{
              height: "50px",
              width: "50px",
              color: "white",
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"white" }}>
            booking@virtaltourguidence.com
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper
        square
        sx={{
          backgroundColor: "#c7c7c7",
          height: "50px",
          paddingBottom: "40px",
        }}
      >
        <Grid container spacing={2} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px"}}>

          <Grid item xs={4}>            
              <img src={logo2} alt="logo" style={{ width: '150px', height: '135px', marginTop:"-50px" }} />
          </Grid>
          <Grid item xs={8}>
            <Tabs
              aria-label="nav tabs example"
              sx={{ }}
            >
              <Tab
                label="Home"
                href="/"
                sx={{ color: "Black" }}
              />
              <Tab
                label="About Us"
                href="/about"
                sx={{ color: "Black" }}
              />
              <Tab
                label="Packages"
                href="/packages"
                sx={{ color: "Black"}}
              />
              <Tab
                label="Deals"
                href="/spam"
                sx={{ color: "Black"}}
              />
              <Tab
                label="Contact Us"
                href="/contact"
                sx={{ color: "Black"}}
              />

            </Tabs>
          </Grid>

        </Grid>
                
        

        
      </Paper>
    </div>
  );
}