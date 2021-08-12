const Precipitaion = ({
  image1,
  temp,
  precipitaion,
  humidity,
  wind,
  condition
}) => {
  return (
    <div className="precp">
      <div className="left">
        <img src={image1} alt="" />
        <div>{condition}</div>
        <span>{temp}°</span>
      </div>
      <div className="right">
        <div>Precipitaion: {precipitaion}in</div>
        <div>Humidity: {humidity}%</div>
        <div>Wind: {wind}kph</div>
      </div>
    </div>
  );
};

export default Precipitaion;
