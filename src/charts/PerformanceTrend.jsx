import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function PerformanceTrend(){

const data = [
  {month:"Jan", score:65},
  {month:"Feb", score:70},
  {month:"Mar", score:74},
  {month:"Apr", score:78},
  {month:"May", score:84},
  {month:"Jun", score:88}
];


return(

<div className="chart-card">


<h3>
Performance Trend
</h3>


<ResponsiveContainer width="100%" height={260}>

<LineChart data={data}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line
type="monotone"
dataKey="score"
stroke="#2563eb"
strokeWidth={3}
/>


</LineChart>

</ResponsiveContainer>


</div>

);

}


export default PerformanceTrend;