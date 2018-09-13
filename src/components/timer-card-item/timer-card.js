import React from 'react';

import './timer-card.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ms = require('pretty-ms');


class Timercard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      start: 0,
      timerIsOn: false,
    }
    this.stopTimer = this.stopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer(){
    this.setState({
      timerNumber: 1,
      timer: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1)
    console.log('starting timer')
  }
  stopTimer(){
    this.setState({
      isOn: false,
    })
    clearInterval(this.timer);
    console.log('stopping timer')
  }
  resetTimer(){
    this.setState({time: 0});
    console.log(`resetting timer ${this.state.timerNumber}`)
  }
  render() {
    let start = (this.state.time === 0)?
    <Button onClick={this.startTimer} size="large" variant="contained" color="primary" target="_blank">Start</Button>: null;
    let stop = (this.state.isOn)?
    <Button onClick={this.stopTimer} size="small" color="primary" target="_blank">Stop</Button>: null;
    let resume = (this.state.time !== 0 && !this.state.isOn)?
    <Button onClick={this.startTimer} size="large" variant="contained" color="primary" target="_blank">Resume</Button>: null;
    let reset = (this.state.time !== 0 && !this.state.isOn)?
    <Button onClick={this.resetTimer} size="small" color="primary" target="_blank">Reset</Button>:null;

    return (
      <div className="cardContainer">
        <Card className="card">
          <CardContent>
            <Typography className="title" gutterBottom variant="headline" component="h2">
              {/*this.state.title*/}
            </Typography>

            <Typography component="p">Timer: {ms(this.state.time)}</Typography>
          </CardContent>
          <CardActions>
            {start}
            {resume}
            {stop}
            {reset}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Timercard;
