import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../component/Weather";
import Option from "../component/Option";
import Weekweather from "../component/Weekweather";

const Homepage = () => {
  let [city, setCity] = useState("");
  let [data, setData] = useState(null);
  let [select, setSelect] = useState("臺北市");

  const getdata = async () => {
    try {
      // 判斷目前是不是在本地開發環境
      const isLocal = window.location.hostname === "localhost";

      // 根據環境選擇要呼叫的 API 來源
      const weatherAPI = isLocal
        ? // 🌦️ 本地開發時直接呼叫氣象署 API（使用本地 .env 的金鑰）
          `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${process.env.REACT_APP_AUTH_KEY}&LocationName=${select}&format=JSON`
        : // ☁️ 部署到 Vercel 時，改呼叫 Serverless Function（藏金鑰）
          `/api/weather?location=${select}`;

      // 呼叫 API
      const result = await axios.get(weatherAPI);

      // 除錯：可在本地看回傳資料結構
      console.log("✅ weather data:", result.data);

      // 更新畫面
      setCity(result.data.records.Locations[0].Location[0].LocationName);
      setData(result.data.records.Locations[0].Location[0].WeatherElement);
    } catch (error) {
      console.error("❌ 無法取得天氣資料：", error);
    }
  };

  const selected = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    if (select) {
      getdata(select);
      setCity(select);
    }
  }, [select]);

  return (
    <div>
      <Option selected={selected} />
      <div className="weatherArea">
        {data && <Weather data={data} city={city} />}
      </div>
    </div>
  );
};

export default Homepage;
