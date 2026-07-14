import React from "react";

import {
 PieChart,
 Pie,
 Cell,
 Tooltip,
 ResponsiveContainer
} from "recharts";


function ReviewAnalytics(){


const data=[

{
name:"Completed",
value:74
},

{
name:"Pending",
value:26
}

];


return(

<div className="chart-card">


<h3>
Review Completion
</h3>


<ResponsiveContainer width="100%" height={260}>


<PieChart>


<Pie
data={data}
dataKey="value"
outerRadius={90}
label
>


{
data.map((item,index)=>(

<Cell 
key={index}
/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>

);

}


export default ReviewAnalytics;