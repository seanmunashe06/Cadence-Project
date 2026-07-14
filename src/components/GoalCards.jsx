import React from "react";


function GoalCard({title,owner,progress,status}){


return(

<div className="card goal">


<div className="goal-top">

<h3>
{title}
</h3>


<span className="status">
{status}
</span>


</div>


<p>
Owner: {owner}
</p>


<div className="progress-bar">

<div
className="progress"
style={{width:`${progress}%`}}
>

</div>

</div>


<div className="goal-footer">

<span>
{progress}% Complete
</span>


</div>


</div>

);

}


export default GoalCard;