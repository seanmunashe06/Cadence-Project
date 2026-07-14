import React from "react";

import ReviewCard from "../components/ReviewsCard";


function Reviews(){

return(

<div className="view">


<h1>
Review Cycle
</h1>


<p>
Manage employee performance reviews.
</p>



<ReviewCard

title="Mid-Year Performance Review"

reviewer="Team Manager"

date="30 June 2026"

status="Active"

/>



<ReviewCard

title="Annual Review"

reviewer="HR Department"

date="December 2026"

status="Upcoming"

/>


</div>

);

}


export default Reviews;