import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
const MyOrders = () => {
     const [orders,setOrders] = useState([]);
     const {user} =useAuth();     
     useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    // dlete api
    const handleDeleteOrder = id => {
      const proceed = window.confirm('Are you sure, You want to delete your order')
      if (proceed) {
          const url = `http://localhost:5000/order/${id}`;
          fetch (url , {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount) {
                      alert('Deleted Successfully')
                      const remainingOrder = orders.filter(order => order._id !== id);
                      setOrders(remainingOrder);
                  }
              });
      }

  }
    return (
        <div className="orderContainer">
          <h3>Products You Ordered :{orders.length}</h3>
          {orders?.map((order)=>(

         
            <Box >
            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
           
          </Grid>
          <Grid item md >
            <Typography>{order?.name1}</Typography>
            <Typography>{order?.name}</Typography>
            <Typography>{order?.email}</Typography>
            <Typography>{order?.phone}</Typography>
           
          </Grid>
         
        </Grid>
        <Stack direction="row" spacing={3}>
              <Button  onClick={() => handleDeleteOrder(order._id)} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
      </Paper>
      
            </Box>
             ))}
        </div>
         
    );
};

export default MyOrders;