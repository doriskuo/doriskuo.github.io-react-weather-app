import React from "react";
import UVindex from "./UVindex";

const Weekuvindex = ({ weekuvindex }) => {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="weekuvindexbox">
      <div className="indextop">
        {weekuvindex.map((uv, i) => {
          const date = new Date(uv.StartTime);
          const w = week[date.getDay()];
          const uvindexcode = uv.ElementValue[0]?.UVIndex;
          const level = uv.ElementValue[0]?.UVExposureLevel;
          return (
            <div className="dayuvindex" key={i}>
              <h3>{w}</h3>

              {["1", "2"].includes(uvindexcode) && <UVindex className="low" />}
              {["3", "4", "5"].includes(uvindexcode) && (
                <UVindex className="moderate" />
              )}
              {["6", "7"].includes(uvindexcode) && <UVindex className="high" />}
              {["8", "9", "10"].includes(uvindexcode) && (
                <UVindex className="veryhigh" />
              )}
              {["11"].includes(uvindexcode) && <UVindex className="extreme" />}
              <p>{level}</p>
            </div>
          );
        })}
      </div>

      <div className="indexbottom">
        <div className="indexdescription">
          <table>
            <tbody>
              <tr>
                <td>
                  <UVindex className="low" />
                </td>
                <td>
                  <UVindex className="moderate" />
                </td>
                <td>
                  <UVindex className="high" />
                </td>
                <td>
                  <UVindex className="veryhigh" />
                </td>
                <td>
                  <UVindex className="extreme" />
                </td>
              </tr>
              <tr>
                <td>0~2</td>
                <td>3~5</td>
                <td>6~7</td>
                <td>8~10</td>
                <td>11+</td>
              </tr>
              <tr>
                <td>低量級</td>
                <td>中量級</td>
                <td>高量級</td>
                <td>過量級</td>
                <td>危險級</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Weekuvindex;
