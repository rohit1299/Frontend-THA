const Details = ({ feelsLike ,sunrise,sunset,pressure,uv,rain}) => {
  return (
    <div className="white8">
      <div className="top">
      <div className="leftside"><div className="large">{feelsLike}°</div><div style={{fontSize:"30px"}}>Feels Like</div> </div>
      <div className="rightside"><div>Sunrise: {sunrise}</div><hr/>
      <div>Sunset: {sunset}</div><hr/>
      <div>Pressure: {pressure}mb</div><hr/>
      <div>UV: {uv}</div><hr/>
      <div>Rain chances: {rain}%</div>
      </div>
      </div>
    </div>
  );
};

export default Details;
