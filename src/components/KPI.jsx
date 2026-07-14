import React from "react";


function KPI({title,value,trend}){


return(

<div className="card kpi">


<div className="kpi-header">

<h4>
{title}
</h4>


<span>
{trend}
</span>


</div>



<h2>
{value}
</h2>


<div className="kpi-progress">

<div className="kpi-fill"></div>

</div>


</div>

);

}


export default KPI;