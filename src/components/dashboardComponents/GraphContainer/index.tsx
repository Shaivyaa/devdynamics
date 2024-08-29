// import React, { useEffect, useState } from "react";
// import { BarGraphHeader, GraphDetails } from "./index.styles";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   LabelList,
//   Label,
// } from "recharts";
// import { DashboardData } from "./index.types";

// export default function GraphContainer() {
//   const [data, setData] = useState<DashboardData | null>(null);

//   useEffect(() => {
//     fetch("https://devdynamics-assignment.netlify.app/data")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   if (!data) return <div>Loading...</div>;

//   const chartData = data.AuthorWorklog.activityMeta.map((meta) => ({
//     label: meta.label,
//     value: meta.value,
//   }));

//   return (
//     <>
//       <GraphDetails>
//         <BarGraphHeader>Total Activity Distribution</BarGraphHeader>
//         <BarChart barSize={30} width={1000} height={400} data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="label">
//             <Label value="ActivityType" offset={-5} position="insideBottom" />
//           </XAxis>
//           <YAxis>
//             <Label value="Value" angle={-90} position="insideLeft" />
//           </YAxis>
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill="#4d4dfe">
//             <LabelList dataKey="value" position="top" />
//           </Bar>
//         </BarChart>
//       </GraphDetails>
//     </>
//   );
// }

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
    fetch("https://devdynamics-assignment.netlify.app/db.json") // Corrected the API endpoint
      .then((response) => response.json())
      .then((responseData) => setData(responseData.data)) // Adjusted to set the correct part of the response
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = data.AuthorWorklog.activityMeta.map((meta) => ({
    label: meta.label,
    value: meta.value, // Convert string to number
  }));

  return (
    <GraphDetails>
      <BarGraphHeader>Total Activity Distribution</BarGraphHeader>
      <BarChart barSize={30} width={1000} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label">
          <Label value="Activity Type" offset={-5} position="insideBottom" />
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
  );
}
