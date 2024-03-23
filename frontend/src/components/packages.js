import React,{ useState, useEffect } from "react";
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

const Packages = () =>{


   const [items, setitems] = useState([]);
   const [packageInfo, setPackageInfo] = useState({});
   const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8090/package")
    .then((res) => {
      setitems(res.data);
      console.log(res.data)
    })
    .catch((err) => console.log(err));
    setOpen(false);
  }, []);


  const setInfo = async (id) => {
    await axios.get(`http://localhost:8090/package/${id}`)
    .then((res) => {
      setPackageInfo(res.data);
      console.log(res)
    })
    .catch((err) => console.log(err));

    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  function PaperComponent(PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...PaperProps} />
      </Draggable>
    );
  }

    return (
      <div>
        {/* <h1>Packages Page</h1> */}

        {items.map((item, index) => (
          
              <Card sx={{ width: 350, height:430, display: "inline-block", marginLeft:"25px", marginRight:"10px", marginTop:"25px" }}>
                <CardHeader                  
                  title={item.Title}
                  subheader={item.Subheader}
                />
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.Image}
                  alt="package"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{textAlign:"justify"}}>
                    {item.Desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary" 
                  sx={{marginBottom:"5px", width:345, backgroundColor:"#448aff", color:"black"}}
                  onClick={() => setInfo(item._id)}
                >
                  More Information
                </Button>
              </CardActions>
            </Card>
        ))} 

        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            {packageInfo.Title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {packageInfo.Summary}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error' >Back</Button>
          {/* <Button onClick={handleClose} color='info' autoFocus>
            Confirm
          </Button> */}
        </DialogActions>
        </Dialog>    
        
      </div>
    );
}

export default Packages;