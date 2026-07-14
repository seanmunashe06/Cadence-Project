import React from "react";


function StatCard({title,value,description}){


return(

<div className="card stat">


<h4>
{title}
</h4>


<h2>
{value}
</h2>


<p>
{description}
</p>


</div>

);

}


export default StatCard;