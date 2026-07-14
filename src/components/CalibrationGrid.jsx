import React from "react";


function CalibrationGrid(){


const data=[

{
employee:"Sarah Moyo",
performance:"High",
potential:"High"
},

{
employee:"John Smith",
performance:"Medium",
potential:"High"
},

{
employee:"David Lee",
performance:"Medium",
potential:"Medium"
}

];


return(

<div className="card ninebox">


<h3>
Calibration Matrix
</h3>


<div className="calibration-grid">


{
data.map((person,index)=>(

<div 
className="heat"
key={index}
>


<h4>
{person.employee}
</h4>


<p>
Performance: {person.performance}
</p>


<p>
Potential: {person.potential}
</p>


</div>

))

}


</div>


</div>

);

}


export default CalibrationGrid;