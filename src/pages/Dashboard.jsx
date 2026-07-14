import React from "react";

import Header from "../components/Header";

import StatCard from "../components/StatCard";
import KPI from "../components/KPI";

import GoalCard from "../components/GoalCards";
import ReviewCard from "../components/ReviewsCard";
import FeedbackCard from "../components/FeedbackCard";

import CalibrationGrid from "../components/CalibrationGrid";
import AnalyticsCard from "../components/AnalyticsCard";
import Charts from "../components/Charts";


function Dashboard(){

return(

<div className="view">


<Header />



{/* Performance Statistics */}

<section className="stats">


<StatCard
title="Goals Completed"
value="8 / 12"
description="Objectives achieved"
/>


<StatCard
title="Review Progress"
value="74%"
description="Mid-year reviews completed"
/>


<StatCard
title="Feedback Received"
value="3"
description="New feedback items"
/>


<StatCard
title="Team Rating"
value="3.8"
description="Average performance score"
/>


</section>




{/* KPI Section */}

<section className="split-3">


<KPI
title="Performance Score"
value="88%"
trend="+12%"
/>


<KPI
title="Engagement"
value="91%"
trend="+8%"
/>


<KPI
title="Completion Rate"
value="74%"
trend="+5%"
/>


</section>





{/* Goals */}

<section className="section">


<h2>
Current Goals
</h2>



<GoalCard

title="Improve Customer Experience"

owner="Product Team"

progress={80}

status="On Track"

/>



<GoalCard

title="Increase Team Delivery"

owner="Engineering"

progress={65}

status="In Progress"

/>



<GoalCard

title="Leadership Development"

owner="Management"

progress={90}

status="Completed"

/>


</section>






{/* Reviews */}

<section className="section">


<h2>
Review Cycle
</h2>


<ReviewCard

title="Mid-Year Performance Review"

reviewer="Manager"

date="30 June 2026"

status="Active"

/>


</section>







{/* Feedback */}

<section className="section">


<h2>
360 Feedback
</h2>



<div className="split-3">


<FeedbackCard

name="Sarah Moyo"

role="Team Lead"

message="Strong collaboration and ownership."

/>



<FeedbackCard

name="John Smith"

role="Developer"

message="Excellent technical contribution."

/>



<FeedbackCard

name="Mary Jones"

role="Manager"

message="Shows consistent improvement."

/>



</div>


</section>







{/* Calibration */}

<section className="section">


<CalibrationGrid />


</section>







{/* Analytics */}

<section className="section">


<AnalyticsCard title="Performance Analytics">


<Charts />


</AnalyticsCard>


</section>




</div>

);

}


export default Dashboard;