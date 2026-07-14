import React from "react";


function Topbar() {


  return (

    <header className="topbar">


      <div className="top-left">


        <p className="breadcrumb">
          Cadence / Overview
        </p>


        <h2>
          Performance Dashboard
        </h2>


      </div>



      <div className="top-actions">


        <div className="search-box">

          <input
            type="text"
            placeholder="Search employees, goals..."
          />

        </div>



        <button className="notification">

          🔔

        </button>



        <button className="primary-btn">

          + New Goal

        </button>


      </div>


    </header>

  );

}


export default Topbar;