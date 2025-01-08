import "./App.css";

export default function Weather() {
  let currentCity = "Lagos";
  let date = "Tuesday 10:00";
  let description = "Moderate Rain";
  let humidity = 87;
  let wind = 7.2;
  return (
    <div className="Weather">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{currentCity}</h1>
            <p className="current-details">
              <span>Last Updated:</span> {date} <br />
              <span></span>
              {description} <br />
              Humidity: <strong>{humidity}%</strong>, Wind:{" "}
              <strong>{wind}km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span
              className="current-temperature-value"
              id="current-temperature-value"
            >
              24
            </span>
            <span className="current-temperature-unit">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
