import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const [isHovered, setIsHovered] = useState(null);
  const data = [
    { name: "Jan", series1: 4, series2: 2 },
    { name: "Feb", series1: 3, series2: 5 },
    { name: "Mar", series1: 5, series2: 6 },
    { name: "Apr", series1: 6, series2: 4 },
    { name: "May", series1: 5, series2: 3 },
    { name: "Jun", series1: 6, series2: 5 },
    { name: "Jul", series1: 7, series2: 7 },
    { name: "Aug", series1: 8, series2: 2 },
    { name: "Sep", series1: 4, series2: 3.9 },
    { name: "Oct", series1: 3, series2: 5 },
    { name: "Nov", series1: 7, series2: 3 },
    { name: "Dec", series1: 1, series2: 7 },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDisplayData = () => {
    if (windowWidth < 400) {
      return [
        {
          name: "Q1",
          series1: (data[0].series1 + data[1].series1 + data[2].series1) / 3,
          series2: (data[0].series2 + data[1].series2 + data[2].series2) / 3,
        },
        {
          name: "Q2",
          series1: (data[3].series1 + data[4].series1 + data[5].series1) / 3,
          series2: (data[3].series2 + data[4].series2 + data[5].series2) / 3,
        },
        {
          name: "Q3",
          series1: (data[6].series1 + data[7].series1 + data[8].series1) / 3,
          series2: (data[6].series2 + data[7].series2 + data[8].series2) / 3,
        },
        {
          name: "Q4",
          series1: (data[9].series1 + data[10].series1 + data[11].series1) / 3,
          series2: (data[9].series2 + data[10].series2 + data[11].series2) / 3,
        },
      ];
    } else if (windowWidth < 640) {
      return [
        {
          name: "Jan-Feb",
          series1: (data[0].series1 + data[1].series1) / 2,
          series2: (data[0].series2 + data[1].series2) / 2,
        },
        {
          name: "Mar-Apr",
          series1: (data[2].series1 + data[3].series1) / 2,
          series2: (data[2].series2 + data[3].series2) / 2,
        },
        {
          name: "May-Jun",
          series1: (data[4].series1 + data[5].series1) / 2,
          series2: (data[4].series2 + data[5].series2) / 2,
        },
        {
          name: "Jul-Aug",
          series1: (data[6].series1 + data[7].series1) / 2,
          series2: (data[6].series2 + data[7].series2) / 2,
        },
        {
          name: "Sep-Oct",
          series1: (data[8].series1 + data[9].series1) / 2,
          series2: (data[8].series2 + data[9].series2) / 2,
        },
        {
          name: "Nov-Dec",
          series1: (data[10].series1 + data[11].series1) / 2,
          series2: (data[10].series2 + data[11].series2) / 2,
        },
      ];
    }
    return data;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow-md border border-gray-200">
          <p className="font-bold text-gray-800 text-sm">{label}</p>
          <p className="text-blue-600 text-xs">
            Series 1: {payload[0].value.toFixed(1)}
          </p>
          <p className="text-green-600 text-xs">
            Series 2: {payload[1].value.toFixed(1)}
          </p>
        </div>
      );
    }
    return null;
  };

  const displayData = getDisplayData();

  return (
    <div className="w-[100%] p-1 md:p-2">
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-2 md:mb-6">
          Monthly Performance
        </h2>
        <div className="h-48 md:h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={displayData}
              margin={{
                top: 10,
                right: windowWidth < 640 ? 10 : 30,
                left: windowWidth < 640 ? 0 : 20,
                bottom: windowWidth < 640 ? 0 : 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                tick={{
                  fill: "#666",
                  fontSize: windowWidth < 400 ? 8 : windowWidth < 640 ? 9 : 12,
                  angle: windowWidth < 640 ? -45 : 0,
                  textAnchor: windowWidth < 640 ? "end" : "middle",
                  dy: windowWidth < 640 ? 10 : 0,
                }}
                height={windowWidth < 640 ? 50 : 30}
              />
              <YAxis
                tick={{
                  fill: "#666",
                  fontSize: windowWidth < 400 ? 8 : windowWidth < 640 ? 9 : 12,
                }}
                width={windowWidth < 640 ? 25 : 35}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{
                  fontSize: windowWidth < 400 ? 8 : windowWidth < 640 ? 9 : 12,
                  paddingTop: windowWidth < 640 ? 0 : 10,
                }}
                verticalAlign={windowWidth < 400 ? "top" : "bottom"}
              />
              <Bar
                dataKey="series1"
                name="Series 1"
                fill={isHovered === "series1" ? "#3182CE" : "#63B3ED"}
                onMouseEnter={() => setIsHovered("series1")}
                onMouseLeave={() => setIsHovered(null)}
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
                barSize={windowWidth < 400 ? 15 : windowWidth < 640 ? 20 : 30}
              />
              <Bar
                dataKey="series2"
                name="Series 2"
                fill={isHovered === "series2" ? "#2F855A" : "#68D391"}
                onMouseEnter={() => setIsHovered("series2")}
                onMouseLeave={() => setIsHovered(null)}
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
                barSize={windowWidth < 400 ? 15 : windowWidth < 640 ? 20 : 30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
