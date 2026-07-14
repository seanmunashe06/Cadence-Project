import React from "react";

import {
Link
} from "react-router-dom";


function Sidebar(){


const menuItems=[

{
name:"Overview",
path:"/"
},

{
name:"Goals & OKRs",
path:"/goals"
},

{
name:"Review Cycle",
path:"/reviews"
},

{
name:"360 Feedback",
path:"/feedback"
},

{
name:"Check-ins",
path:"/checkins"
},

{
name:"Calibration",
path:"/calibration"
},

{
name:"Analytics",
path:"/analytics"
}

];


return(

<aside className="side">


<div className="brand">

<h2>
Cadence
</h2>

<span>
Performance Platform
</span>

</div>



<nav className="navigation">


{
menuItems.map((item,index)=>(


<Link
to={item.path}
key={index}
className={`nav-item ${
index===0 ? "active": ""
}`}
>


{item.name}


</Link>


))

}



</nav>


</aside>

);


}


export default Sidebar;