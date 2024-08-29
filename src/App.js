import React, { Component } from "react";
import "./App.css";
import Form from "./component/form";
import Weather from "./component/weather";

class App extends Component {
  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //console.log("helo");
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`
    );

    const data = await api.json();
    if (city && country) {
      this.setState({
        temp: Math.round(data.main.temp - 273),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
      console.log(data);
    } else {
      this.setState({
        temp: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "please Enter Valid Data",
      });
      console.log("in");
    }

    e.target.elements.city.value = "";
    e.target.elements.country.value = "";
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getweather={this.getweather} />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;

/* function App() {
  
  return (
    <div className="App">
      Hello
      <Form />
      <Weather />
    </div>
  );
}

export default App;
 */
