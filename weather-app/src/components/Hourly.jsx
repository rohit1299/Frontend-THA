const Hourly = ({ time, image, temp }) => {
  return (
    <div className="column_hourly">
      <div>{time}</div>
      <img src={image} alt="" />
      <div>{temp}°</div>
    </div>
  );
};

export default Hourly;
