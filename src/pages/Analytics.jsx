import React from "react";

import AnalyticsCard from "../components/AnalyticsCard";

import Charts from "../components/Charts";


function Analytics(){

return(

<div className="view">


<h1>
Analytics
</h1>


<p>
Performance insights and trends.
</p>



<AnalyticsCard title="Performance Analytics">


<Charts />


</AnalyticsCard>



</div>

);

}


export default Analytics;