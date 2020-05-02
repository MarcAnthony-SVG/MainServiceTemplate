import React from "react";
import Similar from '../src/Component/Similar_Items_Component.js';
import AlsoBought from '../src/Component/Customers_Also_Bought.js';
import "./App.css";
// import "./styles.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(), 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="Title">RECOMMENDED FOR YOU</header>
        <button className="Button1">Similar Items</button>
        <button className="Button2">Customers Also Bought</button>
        <Similar/>
        <AlsoBought /> 
        <div className="LowerBox"/>
        <button id="Button3">Shop All Similar Items</button>
        </div>
    );
  }
}

export default Main;