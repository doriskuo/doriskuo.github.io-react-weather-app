import React from "react";

const Weektemperature = ({ Weekweathertemperatures }) => {
  const daytemperatures = Weekweathertemperatures.filter((d, i) => i % 2 == 1);
  console.log(daytemperatures);
  const temps = daytemperatures.map((tem) => {
    return tem.ElementValue[0].Temperature;
  });
  const points = temps
    .map((temp, index) => `${index * 50 + 50},${150 - temp * 10 + 250}`)
    .join(" ");

  return (
    <div className="temperaturebox">
      <svg viewbox="0 0 100 100">
        {daytemperatures.map((t, i) => {
          let tcode = t.ElementValue[0].Temperature;
          return (
            <>
              <circle
                cx={i * 50 + 50}
                cy={150 - tcode * 10 + 250}
                r="3"
                key={i}
              ></circle>
              <text x={i * 50 + 50} y={150 - tcode * 10 + 240}>
                {tcode}˚C
              </text>
            </>
          );
        })}
        <polyline points={points} />
      </svg>
    </div>
  );
};

export default Weektemperature;
