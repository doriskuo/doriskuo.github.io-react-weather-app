import React from "react";
import Cloud from "./Cloud";
import Rain from "./Rain";
import Suncloud from "./Suncloud";
import Sun from "./Sun";
import Thunder from "./Thunder";
import Thundercloud from "./Thundercloud";
import Thunderrain from "./Thunderrain";
import dayjs from "dayjs";
import Weekweather from "./Weekweather";
import Thundersun from "./Thundersun";

const Weather = ({ data, city }) => {
  let weathercode = data[12].Time[0].ElementValue[0].WeatherCode;
  let Weekweathers = data[12].Time;
  return (
    <div className="weatherbg">
      <div className="weatherbox">
        <div className="left">
          <div className="iconbox">
            {weathercode == "01" && <Sun />}
            {["02", "03"].includes(weathercode) && <Suncloud />}
            {["04", "05", "06", "07"].includes(weathercode) && (
              <Cloud className="cloud-in-weather" />
            )}
            {["08", "09", "10", "11", "12", "13", "14", "29", "30"].includes(
              weathercode
            ) && <Rain className="rain-in-weather" />}
            {["15", "16", "17", "18", "22", "33", "34"].includes(
              weathercode
            ) && <Thunderrain />}
            {["21"].includes(weathercode) && <Thundersun />}
          </div>
          <div className="city">{city}</div>
          <div className="date">
            {dayjs(data[0].Time[0].StartTime).format("M月D日 HH:mm")}
          </div>
          <div className="overview">
            {data[12].Time[0].ElementValue[0].Weather}
          </div>
          <div className="precipitation">
            降雨機率
            {data[11].Time[0].ElementValue[0].ProbabilityOfPrecipitation}%
          </div>
          <div className="temperature">
            {data[0].Time[0].ElementValue[0].Temperature}˚C
          </div>
          <div className="tip">
            {data[14].Time[0].ElementValue[0].WeatherDescription}
          </div>
        </div>
        <div className="right">
          <div className="topbox"></div>
          <div className="bottombox">
            <Weekweather Weekweathers={Weekweathers} className="active" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
