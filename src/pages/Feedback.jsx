import React from "react";

import FeedbackCard from "../components/FeedbackCard";


function Feedback(){


return(

<div className="view">


<h1>
360 Feedback
</h1>


<p>
Employee feedback and collaboration insights.
</p>



<div className="split-3">


<FeedbackCard

name="Sarah Moyo"

role="Team Lead"

message="Excellent teamwork and communication."

/>



<FeedbackCard

name="John Smith"

role="Developer"

message="Great technical contribution."

/>



<FeedbackCard

name="Mary Jones"

role="Manager"

message="Strong leadership skills."

/>


</div>



</div>

);

}


export default Feedback;