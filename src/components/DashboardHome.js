import React, { useState } from "react";
import "../App.css";

import { DashboardView } from "./dashboardView";
import { DashboardGraphs } from "./DashboardGraphs";

export const DashboardHome = () => {
  const [isFalse, setisFalse] = useState(false);

  // let displayComponents = <DashboardView />;

  const displayContainer = () => {
    console.log("checking");
    setisFalse(!isFalse);
  };

  return (
    <>
      <div className="row">
        <div
          className="
                    col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1
                    dashboard_view
                  "
        >
          <h3>Quick Actions</h3>
          <a id="collapse_dashBoard1" onClick={displayContainer}>
            Collapse
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>

          {!isFalse ? <DashboardView /> : null}
        </div>
        <div className="row dashboard_graphs">
          <div className="col-md-12 col-sm-12">
            <h3>Projects Usage</h3>
            <a id="collapse_dashBoard1_graph" onClick={displayContainer}>
              Collapse
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <div className="dashboard_graphItems">
              {isFalse ? <DashboardGraphs /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
