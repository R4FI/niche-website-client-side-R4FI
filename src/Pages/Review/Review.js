import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
// import { display, typography } from '@mui/system';
const Review = () => {
    const [allreview,setReview] = useState([]);
    const label = {
        1: "Useless+",
        2: "Poor+",
        3: "Ok+",
        4: "Good+",
        5: "Excellent+",
    };
    useEffect(()=>{
        fetch('http://localhost:5000/feedback/allfeedback',)
        .then(res=> res.json())
        .then(data=> {
            setReview(data);
        })
    },[])
    return (
       <Container>
            <Typography varient = 'h4' sx={{color:'#009688', textAlign:'center', marginTop:'15px',
        marginBottom:'15px'}} gutterBottom component="div">
            Our Customer's Feedback

            </Typography>
            <Box>
               <Grid container spacing={2}>
                   { 
                   allreview?.map(review=>
                    <Grid item xs={12} md={4}>
               <Card sx={{minWidth:250,minHeight:250}}>
                    <CardContent>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Typography variant="h6" color="text.secondary" gutterBottom component="div">
                                {review.name}

                            </Typography>

                            <Box sx={{width:200 ,
                            display:"flex",
                            alignItems :"center"
                            }}>

                                <Rating 
                                name = "text-feedback"
                                value = {review.rating}
                                precision ={0.5}
                                emptyIcon = {<StarIcon style={{opacity:0.65}}/>}
                                fontSize = "inherit"
                                />
                                <Box sx={{ml:1}}>{label[review.rating]} </Box>
                          </Box>
                        </Box>
                        <Box>
                            <Typography variant ="subtitle2" sx={{textAlign:'center',
                        color:'gray',mt:'4'}} gutterBottom component="div">
                            {review.feedback}

                            </Typography>
                        </Box>
                    </CardContent>
                    
                    </Card>
                    </Grid>


                   )
                    }

               </Grid>
            </Box>
       </Container>
    );
};

export default Review;