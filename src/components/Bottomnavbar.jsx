import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Workout from "./Workout";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import WorkOutlineSharpIcon from "@mui/icons-material/WorkOutlineSharp";
import IconButton from "@mui/material/IconButton";
import DietScreen from "./DietScreen";
import "../css/navbar.css";

const BottomNavBar = () => {
  const [state, setstate] = useState(true);

  const handleEvent = (clickValue) => {
    if (clickValue === "diet" && state === false) {
      setstate(!state);
    } else if (clickValue === "workout" && state === true) {
      setstate(!state);
    }
  };
  return (
    <>
      <div className="bottomNavBar">
        <Router>
          <div className="selectorLine"></div>
          <div className="bottomTabs">
            <Link to="/">
              <IconButton>
                <AssignmentSharpIcon
                  className={state ? "activeClass" : null}
                  onClick={() => {
                    handleEvent("diet");
                  }}
                />
              </IconButton>
            </Link>
            <Link to="/workout">
              <IconButton>
                <WorkOutlineSharpIcon
                  className={!state ? "activeClass" : null}
                  onClick={() => {
                    handleEvent("workout");
                  }}
                />
              </IconButton>
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={DietScreen}></Route>
            <Route path="/workout" component={Workout}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default BottomNavBar;
