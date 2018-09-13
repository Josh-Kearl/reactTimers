import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './dashboard.css';



const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar className="nav">
                <Typography variant="title" color="inherit">
                Timers
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;