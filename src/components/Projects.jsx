import React from "react";

import { Data } from "../utils/ProjectsData";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {Data.length > 0 ? (
            Data.map((obj) => <Project obj={obj} key={obj.id} />)
          ) : (
            <div>No Project to display</div>
          )}
        </div>
      </div>
    </section>
  );
}
