import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTube from "@mui/icons-material/YouTube";
import Grid from '@mui/material/Grid';
import Tab from "@mui/material/Tab";

import logo from "./../../assests/logo.png"
import visa from "./../../assests/visa_logo.jpg"
import master from "./../../assests/master_logo.jpg"
import american_logo from "./../../assests/american_logo.png"

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Footer</h1> */}

        <Paper
          square
          sx={{
            backgroundColor: "#2196f3",
            height: "auto",
            marginTop: "100px",
          }}
        >
          <Grid container spacing={2} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px"}}>

            <Grid item xs={2}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                }}
               >
                
                <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px", textAlign:"left" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                }}
               >
                
                Track2ceylon Travels
              </Typography>
              <Typography> 
                <Tab
                  label="About"
                  href="/about"
                  sx={{ color: "black" }}
                /> 
              </Typography>
              <Typography> 
                <Tab
                  label="Careers"
                  href="/"
                  sx={{ color: "black" }}
                /> 
              </Typography>
              <Typography> 
                <Tab
                  label="Investors"
                  href="/"
                  sx={{ color: "black" }}
                /> 
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px", textAlign:"left" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                }}
               >
                
                Support & Services
              </Typography>
              <Typography> 
                <Tab
                  label="Contact"
                  href="/contact"
                  sx={{ color: "black" }}
                /> 
              </Typography>
              <Typography> 
                <Tab
                  label="FAQ"
                  href="/"
                  sx={{ color: "black" }}
                /> 
              </Typography>
              <Typography> 
                <Tab
                  label="Terms & Conditions"
                  href="/"
                  sx={{ color: "black" }}
                /> 
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px", textAlign:"left" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                }}
               >
                
                Tour & Deals
              </Typography>
              <Typography> 
                <Tab
                  label="Tour Packages"
                  href="/packages"
                  sx={{ color: "black" }}
                /> 
              </Typography>
              <Typography> 
                <Tab
                  label="Deals"
                  href="/"
                  sx={{ color: "black" }}
                /> 
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px"}}>
            <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                  marginBottom:"10px" 
                }}
               >
                
                Social Networks
              </Typography>
              <FacebookRoundedIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "black",
                  marginRight:"10px"
                }}
              />
              <TwitterIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "black",
                  marginRight:"10px"
                }}
              />
              <LinkedInIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "black",
                  marginRight:"10px"
                }}
              />
              <YouTube
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "black",
                  marginRight:"10px"
                }}
              /> 
              <Typography sx={{ marginBottom:"10px" }} > We Accept These Payment Cards </Typography>
                <img src={visa} alt="logo" style={{ width: "45px", height: "40px", objectFit: 'cover', marginRight:"10px" }} />
                <img src={master} alt="logo" style={{ width: "45px", height: "40px", objectFit: 'cover', marginRight:"10px" }} />
                <img src={american_logo} alt="logo" style={{ width: "45px", height: "40px", objectFit: 'cover', marginRight:"10px" }} />
            </Grid>
          </Grid>          
        </Paper>
      </div>
    );
  }
}