import React from "react";
import Card from "./Card/Card";
import classes from "./Projects.module.css";

const projects = (props) => (
  <div className={classes.Projects}>
    <a id="Projects" />
    <h2>Projects</h2>
    <div className={classes.Line}></div>
    <div className={classes.ProjectContainer}>
      <Card
        image={require("../../assets/images/MWL.PNG")}
        title={"My Workout Log"}
        description={"Logs workouts and tracks progress.\n"}
        made={"Made with HTML, CSS, and JavaScript."}
        code={"https://github.com/FinalDX/MyWorkoutLog"}
        live={"http://myworkoutlog.online/"}
      />
      <Card
        image={require("../../assets/images/PP.PNG")}
        title={"Pocket Planner"}
        description={"Manages budgets and displays useful graphs. \n"}
        made={"Made with React.js."}
        code={"https://github.com/FinalDX/pocket-planner"}
        live={"http://pocketplanner.online/"}
      />
    </div>
  </div>
);

export default projects;
