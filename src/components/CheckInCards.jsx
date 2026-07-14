import React from "react";

import CheckInCard from "../components/CheckInCards";


function CheckIns(){

return(

<div className="view">


<h1>
Check-ins
</h1>


<p>
Regular employee progress discussions.
</p>


<CheckInCard
employee="Thandiwe Moyo"
date="Friday, 10:00 AM"
status="Upcoming"
note="Discuss Q2 goals and performance progress."
/>


<CheckInCard
employee="John Smith"
date="Monday, 14:00 PM"
status="Completed"
note="Reviewed objectives and development plan."
/>


</div>

);

}


export default CheckIns;