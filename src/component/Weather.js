import React from "react";
import Cloud from "./Cloud";
import Rain from "./Rain";
import Suncloud from "./Suncloud";
import Sun from "./Sun";
import Thunder from "./Thunder";
import Thundercloud from "./Thundercloud";
import Thunderrain from "./Thunderrain";
import dayjs from "dayjs";

const Weather = ({ data, name }) => {
  let weathercode = data.weatherElement[0].time[0].parameter.parameterValue;
  console.log(weathercode);
  return (
    <div className="weatherbg">
      <div className="weatherbox" name={name}>
        <div className="iconbox">
          {weathercode == 1 && <Sun />}
          {["2", "3"].includes(weathercode) && <Suncloud />}
          {["4", "5", "6", "7"].includes(weathercode) && (
            <Cloud className="cloud-in-weather" />
          )}
          {["8", "9", "10", "11", "12", "13", "14", "29", "30"].includes(
            weathercode
          ) && <Rain />}
          {["15", "16", "17", "18", "22", "33", "34"].includes(weathercode) && (
            <Thunderrain />
          )}
        </div>
        <div className="city">{data.locationName}</div>
        <div className="date">
          {dayjs(data.weatherElement[0].time[0].startTime).format(
            "M月D日 HH:mm"
          )}
        </div>
        <div className="overview">
          {data.weatherElement[0].time[0].parameter.parameterName}
        </div>
        <div className="precipitation">
          降雨機率{data.weatherElement[1].time[0].parameter.parameterName}%
        </div>
        <div className="temperature">
          {data.weatherElement[2].time[0].parameter.parameterName}˚C
        </div>
        <div className="tip">
          {data.weatherElement[3].time[0].parameter.parameterName}
        </div>
      </div>
    </div>
  );
};

export default Weather;
