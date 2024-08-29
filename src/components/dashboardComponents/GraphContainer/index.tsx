import React, { useEffect, useState } from "react";
import { BarGraphHeader, GraphDetails } from "./index.styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LabelList,
  Label,
} from "recharts";
import { DashboardData } from "./index.types";

export default function GraphContainer() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = data.AuthorWorklog.activityMeta.map((meta) => ({
    label: meta.label,
    value: meta.value,
  }));

  return (
    <>
      <GraphDetails>
        <BarGraphHeader>Total Activity Distribution</BarGraphHeader>
        <BarChart barSize={30} width={1000} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label">
            <Label value="ActivityType" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Value" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4d4dfe">
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </GraphDetails>
    </>
  );
}
