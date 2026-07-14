import React from "react";

import GoalCard from "../components/GoalCards";


function Goals(){

return(

<div className="view">

<h1>
Goals & OKRs
</h1>


<p>
Track objectives and key results across teams.
</p>



<div className="section">


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
title="Leadership Training"
owner="Management"
progress={90}
status="Completed"
/>


</div>


</div>

);

}


export default Goals;