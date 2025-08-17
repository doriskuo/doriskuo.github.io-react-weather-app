import React from "react";

const Weektemperature = ({ Weekweathertemperatures }) => {
  const daytemperatures = Weekweathertemperatures.filter(
    (d, i) => i % 2 == 1
  ).sort(
    (a, b) =>
      new Date(a.ElementValue[0].StartTime) -
      new Date(b.ElementValue[0].StartTime)
  );
  const temps = daytemperatures.map((tem) => {
    return tem.ElementValue[0].Temperature;
  });
  const points = temps
    .map((temp, index) => `${index * 80 + 50},${150 - temp * 15 + 470}`)
    .join(" ");

  return (
    <div className="temperaturebox">
      <svg viewBox="0 0 600 240">
        {daytemperatures.map((t, i) => {
          let tcode = t.ElementValue[0].Temperature;
          return (
            <React.Fragment key={i}>
              <circle
                cx={i * 80 + 50}
                cy={150 - tcode * 15 + 470}
                r="4"
              ></circle>
              <text x={i * 80 + 50} y={150 - tcode * 15 + 450}>
                {tcode}˚C
              </text>
            </React.Fragment>
          );
        })}
        <polyline points={points} />
      </svg>
    </div>
  );
};

export default Weektemperature;
