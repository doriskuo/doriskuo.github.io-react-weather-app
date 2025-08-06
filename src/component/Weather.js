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
import Weektemperature from "./Weektemperature";

const Weather = ({ data, city }) => {
  let weathercode = data[12].Time[0].ElementValue[0].WeatherCode;
  let Weekweathers = data[12].Time;
  let Weekweathertemperatures = data[0].Time;
  return (
    <div className="weatherbg">
      <div className="weatherbox">
        <div className="left">
          <div className="top-in-left">
            <div className="left-in-lefttop">
              <p className="temperature">
                {data[0].Time[0].ElementValue[0].Temperature}˚C
              </p>
              <h3 className="city">{city}</h3>
              <p className="date">
                {dayjs(data[0].Time[0].StartTime).format("M月D日 HH:mm")}
              </p>
              <p className="precipitation">
                降雨機率
                {data[11].Time[0].ElementValue[0].ProbabilityOfPrecipitation}%
              </p>
            </div>

            <div className="right-in-lefttop">
              <div className="iconbox">
                {weathercode == "01" && <Sun className="sun-in-weather" />}
                {["02", "03"].includes(weathercode) && (
                  <Suncloud className="suncloud-in-weather" />
                )}
                {["04", "05", "06", "07"].includes(weathercode) && (
                  <Cloud className="cloud-in-weather" />
                )}
                {[
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "29",
                  "30",
                ].includes(weathercode) && <Rain className="rain-in-weather" />}
                {["15", "16", "17", "18", "22", "33", "34"].includes(
                  weathercode
                ) && <Thunderrain className="thunderrain-in-weather" />}
                {["21"].includes(weathercode) && (
                  <Thundersun className="thundersun-in-weather" />
                )}
              </div>
              <h6 className="overview">
                {data[12].Time[0].ElementValue[0].Weather}
              </h6>
            </div>
          </div>

          <div className="bottom-in-left">
            <h6 className="tip">
              {data[14].Time[0].ElementValue[0].WeatherDescription}
            </h6>
          </div>
        </div>

        <div className="right">
          <div className="topbox">
            <Weektemperature
              Weekweathertemperatures={Weekweathertemperatures}
            />
          </div>
          <div className="bottombox">
            <Weekweather Weekweathers={Weekweathers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
