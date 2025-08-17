import React from "react";
import Cloud from "./Cloud";
import Rain from "./Rain";
import Suncloud from "./Suncloud";
import Sun from "./Sun";
import Thunder from "./Thunder";
import Thundercloud from "./Thundercloud";
import Thunderrain from "./Thunderrain";
import Thundersun from "./Thundersun";

const Weekweather = ({ Weekweathers }) => {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daytime = Weekweathers.filter((d, i) => i % 2 == 1);
  console.log(daytime);
  return (
    <div className="weekbox">
      {daytime.map((item, i) => {
        const date = new Date(item.StartTime);
        const w = week[date.getDay()];
        const weathercode = item.ElementValue[0]?.WeatherCode;
        return (
          <div className="dayweather" key={i}>
            <h3>{w}</h3>
            {weathercode == "01" && <Sun className="sun-in-weekweather" />}
            {["02", "03"].includes(weathercode) && (
              <Suncloud className="suncloud-in-weekweather" />
            )}
            {["04", "05", "06", "07"].includes(weathercode) && (
              <Cloud className="cloud-in-weekweather" />
            )}
            {["08", "09", "10", "11", "12", "13", "14", "29", "30"].includes(
              weathercode
            ) && <Rain className="rain-in-weekweather" />}
            {["15", "16", "17", "18", "22", "33", "34"].includes(
              weathercode
            ) && <Thunderrain className="thunderrain-in-weekweather" />}
            {["21"].includes(weathercode) && (
              <Thundersun className="thundersun-in-weekweather" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Weekweather;
