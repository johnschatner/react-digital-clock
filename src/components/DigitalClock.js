import "./DigitalClock.css";

export default function DigitalClock(props) {
  const hours = props.date.getHours();
  const minutes = props.date.getMinutes();
  const seconds = props.date.getSeconds();

  // Reduces the amount of code necessary to output correctly formatted time
  function render(unitOfTime) {
    return ("0" + unitOfTime).slice(-2);
  }

  // Update the website title with the state
  document.title = `${render(hours)}:${render(minutes)}`;

  const toggleTextSize = (e) => {
    const clock = document.querySelector(".clock-time");
    clock.classList.toggle("big");
  };

  return (
    <div onClick={toggleTextSize} className="clock-time noselect">
      <span className="hours">{render(hours)}</span>
      <span className="divider">:</span>
      <span className="minutes">{render(minutes)}</span>
      <span className="divider">:</span>
      <span className="seconds">{render(seconds)}</span>
    </div>
  );
}
