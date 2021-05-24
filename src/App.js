import "./App.css";
import React from "react";
import { DashboardHome } from "./components/DashboardHome";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        {/* <!--   navbar row--> */}
        <div id="mySidebar" className="sidebar">
          <ul>
            <li>Overview</li>
            <li>Reports</li>
            <li>Analytics</li>
            <li>Export</li>
            <li>WorkFlow</li>
            <li>Calender</li>
            <li>users</li>
            <li>Log Out</li>
          </ul>
        </div>

        <div id="main">
          <div className="container-fluid">
            {/* <!--   header row--> */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                {/* <!-- <div className=""> --> */}

                {/* <!-- </div> --> */}
                {/* <!-- components -->*/}
                <Header />
                <DashboardHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
