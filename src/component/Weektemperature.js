import React from "react";

const Weektemperature = ({ Weekweathertemperatures }) => {
  const daytemperatures = Weekweathertemperatures.filter(
    (d, i) => i % 2 === 1
  ).sort(
    (a, b) =>
      new Date(a.ElementValue[0].StartTime) -
      new Date(b.ElementValue[0].StartTime)
  );

  const temps = daytemperatures.map((tem) =>
    Number(tem.ElementValue[0].Temperature)
  );

  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);

  const viewHeight = 240; // SVG 高度
  const padding = 40; // 上下留白
  const usableHeight = viewHeight - padding * 2;

  // 🔹 增加「緩衝比例」讓波動更平滑
  const tempRange = maxTemp - minTemp || 1;
  const smoothFactor = 1.8; // ← 可以微調，越大越平緩（建議 1.5～2）
  const scaleY = usableHeight / (tempRange * smoothFactor);

  const tempToY = (temp) => viewHeight - padding - (temp - minTemp) * scaleY;

  const points = temps
    .map((temp, index) => `${index * 80 + 50},${tempToY(temp)}`)
    .join(" ");

  return (
    <div className="temperaturebox">
      <svg viewBox="0 0 600 240">
        <polyline points={points} fill="none" stroke="orange" strokeWidth="2" />

        {daytemperatures.map((t, i) => {
          const tcode = Number(t.ElementValue[0].Temperature);
          const y = tempToY(tcode);
          return (
            <React.Fragment key={i}>
              <circle cx={i * 80 + 50} cy={y} r="4" fill="orange" />
              <text
                x={i * 80 + 50}
                y={y - 10}
                textAnchor="middle"
                fontSize="12"
              >
                {tcode}˚C
              </text>
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default Weektemperature;
