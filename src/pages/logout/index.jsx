import React from "react";
import logoutImage from "assets/images/logout.jpg";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function LogOutDefault() {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('first')
        localStorage.removeItem('power_token')
        localStorage.removeItem('role')
        localStorage.removeItem('data')
        localStorage.removeItem('assigned_data')
        navigate('/');
        window.location.reload();
    }

    return (
        <Box sx={{ p: 2, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center'}}>
                {/* Second Column (Confirmation Box) */}
                <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} >
                    <Box sx={{ borderRadius: "8px", p: 3, textAlign: "center", }} >
                        <Typography variant="h1" gutterBottom> Are you sure you want to Logout? </Typography>
                        <Button variant="contained" sx={{ mx: 1, backgroundColor: '#b10202', '&:hover': { backgroundColor: '#b10202' } }} onClick={handleLogout}> <Typography variant="h5"> Logout </Typography> </Button>
                        <Button variant="contained" sx={{ mx: 1, backgroundColor: '#8a8a8a', '&:hover': { backgroundColor: '#8a8a8a' } }}> <Typography variant="h5"> No </Typography> </Button>
                    </Box>
                </Grid>

                {/* First Column (Image) */}
                {/* <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} display={{ xs: "none", sm: "block" }} >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", }} >
                        <img src={logoutImage} alt="logoutImage" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", }} />
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    );
}
