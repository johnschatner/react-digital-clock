import "./DigitalClock.css";

export default function DigitalClock(props) {
  const hours = props.date.getHours();
  const minutes = props.date.getMinutes();
  const seconds = props.date.getSeconds();

  function render(unitOfTime) {
    return ("0" + unitOfTime).slice(-2);
  }

  return (
    <div className="digital-clock">
      <div className="clock-title">Current time</div>
      <div className="clock-time">
        <span className="hours">{render(hours)}</span>
        <span className="divider">:</span>
        <span className="minutes">{render(minutes)}</span>
        <span className="divider">:</span>
        <span className="seconds">{render(seconds)}</span>
      </div>
    </div>
  );
}
