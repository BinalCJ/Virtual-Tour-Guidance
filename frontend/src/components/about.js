/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import image_1 from "./../assests/story.jpg"
import image_2 from "./../assests/vision.jpg"
import image_3 from "./../assests/dedication.png"

 const About = () => {

  const story = "In 2010, Olanka Travels took flight, piloted by Ravi, our CEO and Founder, with the main aim of becoming the best personalised" +
                "spearheaded by Ravi, grew faster by attracting the right people around him. An integral part of our growth lies with listening to " +
                "our customers valuable feedback and improving ourselves, where we compete with ourselves everyday!" +

                "Sri Lanka was the main and primary destination to conquer. Our brand started to gain its momentum worldwide as the reliable online "+
                "travel partner for booking personalised tours to Sri Lanka. This brought us recognition and fame, from our clientele, who simply "+
                "loved our genuine services. Through our customer referrals and online fame, we were able to expand and offer our services to other "+
                "amazing destinations across the globe!"

    const story2 = "travel agent in the world! This one-man show quickly gathered speed as the team at Olanka grew, fast and wide. Olanka Travels, " + "spearheaded by Ravi, grew faster by attracting the right people around him. An integral part of our growth lies with listening to "

    const story3 = "travel agent in the world! This one-man show quickly gathered speed as the team at Olanka grew, fast and wide. Olanka Travels, " + "spearheaded by Ravi, grew faster by attracting the right people around him. An integral part of our growth lies with listening to "
 
    return (
      <div>
        <h1>About Page</h1>

        <Box sx={{ flexGrow: 1, marginLeft:"15px", width:"auto"}}>
          <Grid container spacing={2} sx={{ backgroundColor:"#cfd8dc", padding:"10px 10px 10px 10px"}}>
            <Grid item xs={8}>
              <Paper elevation={0}  sx={{ backgroundColor:"#cfd8dc" }}>
              <Typography
                  sx={{ color: "#01579b", fontWeight:"bold", fontSize:"25px" }}
                >
                  Our Story
                </Typography>
                <Typography
                  sx={{ textAlign:"justify", color: "black" }}
                >
                  {story} 
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} sx={{ backgroundColor:"#cfd8dc" }}> 
                <img src={image_1} alt="image_1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={0} sx={{ backgroundColor:"#cfd8dc" }}> 
                <img src={image_2} alt="image_1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={0}  sx={{ backgroundColor:"#cfd8dc" }}>
              <Typography
                  sx={{ color: "#01579b", fontWeight:"bold", fontSize:"25px" }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{ textAlign:"justify", color: "black" }}
                >
                  {story2} 
                </Typography>
              </Paper>
            </Grid>  
            
            <Grid item xs={8}>
              <Paper elevation={0}  sx={{ backgroundColor:"#cfd8dc" }}>
              <Typography
                  sx={{ color: "#01579b", fontWeight:"bold", fontSize:"25px" }}
                >
                  The Team & Dedication
                </Typography>
                <Typography
                  sx={{ textAlign:"justify", color: "black" }}
                >
                  {story3} 
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} sx={{ backgroundColor:"#cfd8dc" }}> 
                <img src={image_3} alt="image_1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            </Grid>          
            
          </Grid>
        </Box>

        
      </div>
    );
}

export default About;