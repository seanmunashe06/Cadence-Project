import React from "react";

import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";


function GoalProgress(){


const data=[

{
name:"Customer",
progress:80
},

{
name:"Delivery",
progress:65
},

{
name:"Leadership",
progress:90
}

];


return(

<div className="chart-card">


<h3>
Goal Progress
</h3>


<ResponsiveContainer width="100%" height={260}>


<BarChart data={data}>


<XAxis dataKey="name"/>


<YAxis/>


<Tooltip/>


<Bar 
dataKey="progress"
fill="#16a34a"
/>


</BarChart>


</ResponsiveContainer>


</div>

);

}


export default GoalProgress;