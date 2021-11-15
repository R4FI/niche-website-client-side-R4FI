import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const{token} = useAuth();
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdmin = e =>{
        const user = {email};
        fetch('https://sleepy-hamlet-47496.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'auth' : `Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
            console.log(data);
            setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            
         
        <form onSubmit={handleAdmin}>
    <TextField onBlur={handleOnBlur}  label="Email" variant="standard" type="email" required />
    <Button sx={{margin: '8px'}} type="submit"  variant="outlined">Make admin</Button>
    </form>
           {success && <Alert severity="success">Make Admin Sucecessfully</Alert> }
        </div>
    );
};

export default MakeAdmin;