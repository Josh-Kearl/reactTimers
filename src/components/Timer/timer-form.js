import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Timercard from '../timer-card-item/timer-card';
import BottomNavigation from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core';



class Timerform extends React.Component {
    state = {
        value: 0
    };
    render(){
        return ( 
        <div>
            <BottomNavigation>
              <BottomNavigationAction label="Add"/>
              <BottomNavigationAction label="Delete"/>
            </BottomNavigation>
          </div>
        )
    }
}
export default Timer;