import React from "react";


function ReviewCard({title,date,status,reviewer}){


return(

<div className="card review-card">


<h3>
{title}
</h3>


<p>
Reviewer: {reviewer}
</p>


<p>
Due Date: {date}
</p>


<span className="review-status">
{status}
</span>


</div>

);

}


export default ReviewCard;