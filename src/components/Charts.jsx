import React from "react";

import PerformanceTrend from "../charts/PerformanceTrend";
import GoalProgress from "../charts/GoalProgress";
import ReviewAnalytics from "../charts/ReviewAnalytics";


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