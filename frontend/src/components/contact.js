import React from "react";

import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import image_1 from "./../assests/contact_1.jpg"

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Contact Page</h1> */}

        <Grid container spacing={2} sx={{ padding:"10px 10px 10px 10px", marginTop:"5px"}}>
          <CardMedia
                  component="img"
                  height="auto"
                  image={image_1}
                  alt="contact us"
                  sx={{marginLeft:"10px"}}
          />
          <Typography
                  sx={{ color: "white",  fontSize:"50px", marginLeft:"500px", marginTop:"-400px" }}
            >
                  Let's Keep In Touch
          </Typography>
          <Typography
                  sx={{ color: "white", fontWeight:"bold", fontSize:"80px", marginLeft:"500px", marginTop:"-300px" }}
            >
                  Contact US
          </Typography>

          <Grid item xs={8}>
              <Paper elevation={0}  sx={{ backgroundColor:"#cfd8dc" }}>
              <Typography
                  sx={{ color: "#01579b", fontWeight:"bold", fontSize:"25px" }}
                >
                  Contact US
                </Typography>

              <Grid item xs={8} sx={{marginLeft:"25px"}}>
                <TextField id="standard-basic" label="  Your Name" variant="standard" sx={{backgroundColor:"white", borderRadius: 2, marginBottom:"10px" }} fullWidth />
                <TextField id="standard-basic" label="Your Emai" variant="standard" sx={{backgroundColor:"white", borderRadius: 2, marginBottom:"10px"}} fullWidth />
                <TextField
                  id="filled-multiline-flexible"
                  label="Massage"
                  multiline
                  maxRows={4}
                  variant="filled"
                  sx={{backgroundColor:"white", borderRadius: 2, marginBottom:"10px"}}
                  fullWidth
                />
              </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} sx={{ backgroundColor:"#cfd8dc" }}> 
                aaaaaaaaaaaaaaaaaaaa
              </Paper>
            </Grid>

        </Grid>
      </div>
    );
  }
}
