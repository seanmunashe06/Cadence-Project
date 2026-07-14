import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";


import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Reviews from "./pages/Reviews";
import Feedback from "./pages/Feedback";
import CheckIns from "./pages/CheckIns";
import Calibration from "./pages/Calibration";
import Analytics from "./pages/Analytics";


import "./styles/cadence.css";



function App(){


return(

<BrowserRouter>


<div className="app">


<Sidebar />


<main className="main-content">


<Topbar />



<Routes>


<Route 
path="/"
element={<Dashboard />}
/>



<Route 
path="/goals"
element={<Goals />}
/>



<Route 
path="/reviews"
element={<Reviews />}
/>



<Route 
path="/feedback"
element={<Feedback />}
/>



<Route 
path="/checkins"
element={<CheckIns />}
/>



<Route 
path="/calibration"
element={<Calibration />}
/>



<Route 
path="/analytics"
element={<Analytics />}
/>



</Routes>



</main>


</div>


</BrowserRouter>

);


}


export default App;