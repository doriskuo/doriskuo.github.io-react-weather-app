import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../component/Weather";
import Option from "../component/Option";

const Homepage = () => {
  let [city, setCity] = useState("");
  let [data, setData] = useState(null);
  let [select, setSelect] = useState("臺北市");
  const auth = process.env.REACT_APP_AUTH_KEY;

  const getdata = async () => {
    let weatherAPI = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${auth}&LocationName=${select}&format=JSON`;
    let result = await axios.get(weatherAPI);
    console.log(result.data.records.Locations[0].Location[0].WeatherElement);
    setCity(result.data.records.Locations[0].Location[0].LocationName);
    setData(result.data.records.Locations[0].Location[0].WeatherElement);
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
