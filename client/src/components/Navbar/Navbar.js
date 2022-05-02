import React from 'react';
import {AppBar, Box,  Typography} from "@material-ui/core";
import card from "../../images/card.png";
import useStyles from './styles'



const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Box className={classes.brandContainer}>
            <Typography className={classes.heading} variant='h2' align='center'>E-commerce shop</Typography>
            <img className={classes.image}  src={card} alt='card' height='60'/>
            </Box>
        </AppBar>
    );
};

export default Navbar;
