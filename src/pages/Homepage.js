import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../component/Weather";
import Option from "../component/Option";

const Homepage = () => {
  let [data, setData] = useState([]);
  let [select, setSelect] = useState("臺北市");
  const auth = process.env.REACT_APP_AUTH_KEY;

  const getdata = async () => {
    let weatherAPI = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${auth}&locationName=${select}&format=JSON&sort=time`;
    let result = await axios.get(weatherAPI);
    console.log(result.data.records.location);
    setData(result.data.records.location);
  };

  const selected = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    if (select) {
      getdata(select);
    }
  }, [select]);

  return (
    <div>
      <Option data={data} selected={selected} />
      <div className="weatherArea">
        {data &&
          data.map((d) => {
            return <Weather data={d} name={d.locationName} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
