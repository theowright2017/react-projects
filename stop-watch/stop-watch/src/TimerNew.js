import React, {Component} from 'react';

class TimerNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
  }


  componentDidMount() {
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker = () => {
    this.setState({clock: new Date() - this.props.start})
  }


  render() {

    let clock = Math.round(this.state.clock / 1000);

    return (
      <div>

        <p>you have been on this site since</p>
        <br />
        <span> {clock} </span>
        <p>seconds</p>



      </div>
    )
  }
}


export default TimerNew;
