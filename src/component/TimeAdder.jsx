import { useState } from "react";

function TimeAdder() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  const addTime = () => {
    const hh = parseInt(hour, 10);
    const mm = parseInt(minute, 10);
    const newTotalMinutes = totalMinutes + hh * 60 + mm;
    setTotalMinutes(newTotalMinutes);
    setHour(0);
    setMinute(0);
  };

  const resetTime = () => {
    setTotalMinutes(0);
    setHour(0);
    setMinute(0);
  };

  function convertMinutesToHoursAndMinutes(minutes) {
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""}`;
      } else {
        return `${hours} hour${
          hours !== 1 ? "s" : ""
        } ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;
      }
    }
  }
  const shouldAnimate = totalMinutes > 540;
  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter hour..."
        value={hour || ""}
        onChange={(e) => setHour(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter minute..."
        value={minute || ""}
        onChange={(e) => setMinute(e.target.value)}
      />
      <div className="btn-container">
        <button className="reset" onClick={() => resetTime()}>
          Reset
        </button>
        <button className="submit" onClick={() => addTime()}>
          Add time
        </button>
      </div>
      <p className={shouldAnimate ? "animated-text" : ""}>
        Total Time: {convertMinutesToHoursAndMinutes(totalMinutes)}
      </p>
    </div>
  );
}

export default TimeAdder;
