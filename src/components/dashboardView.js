import React from "react";
import "../App.css";

export const DashboardView = () => {
  return (
    <>
      <div id="dashboard_items">
        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Compute</p>
            <h4>Create an ATP database</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-database" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Transaction process</p>
            <h4>Create a VM Instance</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-tasks" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Data Warehouse</p>
            <h4>Create an ATP database</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-database" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Networking</p>
            <h4>Set up a network</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-connectdevelop" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Resource Manager</p>
            <h4>Create a Stack</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-tasks" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Object Storage</p>
            <h4>Create a storage</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-database" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Networking</p>
            <h4>Set up a load balance</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-connectdevelop" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Oracle Cloud Development</p>
            <h4>Setup developer tools</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-sliders" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-md-3 col-sm-3 dashboard_item">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <p>Search</p>
            <h4>View all my resources</h4>
            <small>2 - 6 Mins</small>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-cloud" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};
