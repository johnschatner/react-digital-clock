import "./Credit.css";

export default function Credit() {
  return (
    <div className="credit noselect">
      <div className="hint">hint: click clock</div>
      <span className="credit__by">Made by </span>
      <span className="credit__name">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/johnschatner/react-digital-clock"
        >
          John Schatner
        </a>
      </span>
    </div>
  );
}
