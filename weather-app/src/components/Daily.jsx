const Daily = ({ time, image, max_temp, min_temp }) => {
  return (
    <div className="column">
      <div>{time}</div>
      <img src={image} alt="" />
      <div>
        <span>{max_temp}°/</span>
        <span>{min_temp}°</span>
      </div>
    </div>
  );
};

export default Daily;
