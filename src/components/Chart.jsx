import React, { PureComponent } from "react";
import { useSelector } from "react-redux";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const WeatherDaily = useSelector((state) => state.weatherDaily);

  const data = [
    WeatherDaily?.list.map((el) => {
      return { name: el.dt_txt, "°C": el.main.temp - 273 };
    }),
  ];

  const data2 = [
    WeatherDaily?.list.map((el) => {
      return { name: el.dt_txt, "km/h": el.wind.speed };
    }),
  ];

  console.log(data);
  return (
    <>
      <h6 className="text-white">temperature</h6>
      {data && (
        <ResponsiveContainer width="82%" height="100%">
          <AreaChart
            className=""
            width={500}
            height={400}
            data={WeatherDaily?.list
              .filter((el, i) => i % 8 === 0)
              .map((el) => {
                return {
                  name: el.dt_txt.slice(5, 10),
                  "°C": el.main.temp.toFixed(2),
                };
              })}
            margin={{
              top: 10,
              right: 0,
              left: 160,
              bottom: 0,
            }}
            style={{ position: "relative", height: "195px" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="°C"
              stroke="#040141"
              fill="#0b00ff"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      {data2 && (
        <>
          <h6 className="text-primary">wind speed</h6>
          <ResponsiveContainer width="82%" height="100%">
            <AreaChart
              className=""
              width={500}
              height={400}
              data={WeatherDaily?.list
                .filter((el, i) => i % 8 === 0)
                .map((el) => {
                  return {
                    name: el.dt_txt.slice(5, 10),
                    "wind km/h": el.wind.speed,
                  };
                })}
              margin={{
                top: 10,
                right: 0,
                left: 160,
                bottom: 0,
              }}
              style={{ position: "relative", height: "195px" }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="wind km/h"
                stroke="#0066ff"
                fill="#f8f9fa"
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default Chart;
