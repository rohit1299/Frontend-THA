import "./styles.css";
import { useState, useEffect } from "react";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Details from "./components/Details";
import Precipitaion from "./components/Precipitaion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const arr = [99, 98, 96];
  const hourly_arr = [...Array(24).keys()];
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=044c5790699c40788f982133211008&q=${place}&days=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
      });
  };
  return (
    <Router>
      <div className="App">
        <div className="card">
          <div className="inputBox">
            <input
              type="text"
              placeholder="Seach your city"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button onClick={updatePlaceData}>Search</button>
          </div>
          {placeData.location ? (
            <>
              <div className="temperature">
                <div className="temp white8">{placeData.current.temp_c}°</div>
                <span className="temp_d white8">
                  {placeData.forecast.forecastday[0].day.maxtemp_c}° /{" "}
                </span>
                <span className="temp_d blue">
                  {placeData.forecast.forecastday[0].day.mintemp_c}°
                </span>
              </div>
              <div className="place white8">{placeData.location.name}</div>
              <div className="date white8 ">{placeData.location.localtime}</div>
              <div>
                <img
                  className="img"
                  src={placeData.current.condition.icon}
                  alt=""
                />
                <div className="condition white8">
                  {placeData.current.condition.text}
                </div>
              </div>
              <nav>
                <ul>
                  {/* <Link to="/">
                    <li>Hourly</li>
                  </Link> */}
                  <Link to="/">
                    <li>Daily</li>
                  </Link>
                  <Link to="/details">
                    <li>Details</li>
                  </Link>
                  <Link to="/precipitaion">
                    <li>Precipitaion</li>
                  </Link>
                </ul>
              </nav>
              <hr />
              <Switch>
                {/* <Route path="/" exact>
                  <div className="hourly">
                  {hourly_arr.map((item1, i) => {
                    return (
                      <Hourly
                        key={item1}
                        time={placeData.forecast.forecastday[0].hour[i].time}
                        image={
                          placeData.forecast.forecastday[0].hour[i].condition
                            .icon
                        }
                        temp={placeData.forecast.forecastday[0].hour[i].temp_c}
                      />
                    );
                  })}
                  </div>
                </Route> */}
                <Route path="/" exact>
                  <div className="row">
                    {arr.map((item, index) => {
                      return (
                        <Daily
                          key={item}
                          className="column"
                          time={placeData.forecast.forecastday[index].date}
                          image={
                            placeData.forecast.forecastday[index].day.condition
                              .icon
                          }
                          max_temp={
                            placeData.forecast.forecastday[index].day.maxtemp_c
                          }
                          min_temp={
                            placeData.forecast.forecastday[index].day.mintemp_c
                          }
                        />
                      );
                    })}
                  </div>
                </Route>
                <Route path="/details">
                  <Details
                    feelsLike={placeData.current.feelslike_c}
                    sunrise={placeData.forecast.forecastday[0].astro.sunrise}
                    sunset={placeData.forecast.forecastday[0].astro.sunset}
                    pressure={placeData.current.pressure_mb}
                    uv={placeData.current.uv}
                    rain={
                      placeData.forecast.forecastday[0].day.daily_chance_of_rain
                    }
                  />
                </Route>
                <Route path="/precipitaion">
                  <Precipitaion
                    image1={placeData.current.condition.icon}
                    temp={placeData.current.temp_c}
                    precipitaion={placeData.current.precip_in}
                    humidity={placeData.current.humidity}
                    wind={placeData.current.wind_kph}
                    place={placeData.location.name}
                    time={placeData.location.localtime}
                    condition={placeData.current.condition.text}
                  />
                </Route>
              </Switch>
            </>
          ) : (
            <h2>Place not found!</h2>
          )}
        </div>
      </div>
    </Router>
  );
}
