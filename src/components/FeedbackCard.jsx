import React from "react";


function FeedbackCard({name,role,message}){


return(

<div className="card feedback-card">


<div className="feedback-user">

<h4>
{name}
</h4>


<span>
{role}
</span>


</div>



<p>
"{message}"
</p>



</div>

);

}


export default FeedbackCard;