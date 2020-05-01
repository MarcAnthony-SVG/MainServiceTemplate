import React from "react";
import Similar from "../src/Components/Similar_Items_Component.js";
import AlsoBought from "../src/Components/Customers_Also_Bought.js";
import "../src/App.css";
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
        <header>RECOMMENDED FOR YOU</header>
        <button>Similar Items</button>
        <div />
        <Similar/>
        <button>Customers Also Bought</button>
        <AlsoBought />
        <button>Shop All Similar Items</button>
        </div>
    );
  }
}

export default Main;
