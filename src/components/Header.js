import React, { useState } from "react";
import "../App.css";
export const Header = () => {
  const [isfalse, setIsFalse] = useState(false);
  const [checkNotifications, setCheckNotifications] = useState(false);

  const sideBarActivity = () => {
    var element = document.getElementById("wrapper");
    element.classList.toggle("menuDisplayed");
  };

  const userDropDown = () => {
    console.log("checking dropdown");
    setIsFalse(!isfalse);
  };
  const userNotification = () => {
    console.log("checking dropdown");
    setCheckNotifications(!checkNotifications);
  };

  return (
    <>
      <div className="row header">
        <div className="col-md-3 col-sm-3 col-xs-6">
          <div id="icon">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={sideBarActivity}
            ></i>

            <h2>Dashboard</h2>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12" id="headerSearch">
          <form>
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="search for resources..."
            />

            <i className="fa fa-search"></i>
          </form>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6" id="headerUiMain">
          <ul id="headerUi">
            <li className="headerUiItem" onClick={userNotification}>
              <i className="fa fa-bell" aria-hidden="true"></i>

              {checkNotifications ? (
                <div id="notifications">
                  <div className="userDetails">
                    <p>(0) Notifications</p>
                  </div>
                </div>
              ) : null}
            </li>
            <li className="headerUiItem" onClick={userDropDown}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <i
                className="fa fa-angle-down"
                aria-hidden="true"
                style={{ paddingLeft: "5px" }}
              ></i>

              {isfalse ? (
                <ul id="profile">
                  <li>
                    <div className="userDetails">
                      <p>JS Krishna</p>
                      <hr />
                      <p className="small">Email: me@jskrishna.com</p>
                      <div className="divider"></div>
                      <a href="#">View Profile</a>
                    </div>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
