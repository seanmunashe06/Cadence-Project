import React from "react";

import PerformanceTrend from "../chart-components/PerformanceTrend";
import GoalProgress from "../chart-components/GoalProgress";
import ReviewAnalytics from "../chart-components/ReviewAnalytics";


function Charts(){


return(

<section className="charts">


<div className="split-3">


<PerformanceTrend />

<GoalProgress />

<ReviewAnalytics />


</div>


</section>

);

}


export default Charts;