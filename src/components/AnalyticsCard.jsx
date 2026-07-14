import React from "react";


function AnalyticsCard({title,children}){


return(

<div className="card analytics-card">


<h3>
{title}
</h3>


<div className="analytics-body">

{children}

</div>


</div>

);

}


export default AnalyticsCard;