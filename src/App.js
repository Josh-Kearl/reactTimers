import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import './App.css';
import Timercard from './components/timer-card-item/timer-card.js';
import NavBar from './components/dashboard/dashboard';
import CardContent from '@material-ui/core/CardContent';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      timers: [<Timercard key ={this.numOfTimers} num={this.numOfTimers}/>],
      key: Date.now()
    }
    this.addTimer = this.addTimer.bind(this);
    this.deleteTimer = this.deleteTimer.bind(this);
  }

  numOfTimers = 1;

  deleteTimer(event){
    this.numOfTimers -=1;
    this.state.timers.splice(-1,1);
    this.setState({
      timers: this.state.timers
    })
  }

  addTimer(event){
    this.numOfTimers += 1;
    this.state.timers.push(<Timercard key ={this.numOfTimers} num={this.numOfTimers} />)
    this.setState({
      timers: this.state.timers
    })
    console.log(this.state.timers);
  }


  render() {
    return (
      <div className="container">
        <NavBar/>
        
        <Card>
          <CardContent>
            {this.state.timers}
          </CardContent>
          <CardActions>
            <Button onClick={this.addTimer} size="small" color="primary" target="_blank">Add a timer</Button>
            <Button onClick={this.deleteTimer} size="small" color="primary" target="_blank">Delete a timer</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default App;
