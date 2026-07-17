import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress(props) {
  const theme = props.theme;
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading" style={{ color: theme.text }}>
              Proficiency
            </h1>
            <div className="proficiency-grid">
              {techStack.experience.map((exp) => {
                return (
                  <div
                    className="proficiency-card"
                    style={{ backgroundColor: theme.headerColor }}
                    key={exp.Stack}
                  >
                    <span
                      className="iconify proficiency-card-icon"
                      data-icon={exp.icon}
                      style={{ color: theme.text }}
                      data-inline="false"
                    ></span>
                    <h3 style={{ color: theme.text }}>{exp.Stack}</h3>
                    <p style={{ color: theme.secondaryText }}>
                      {exp.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-image">
            <img alt="Skills" src={require("../../assests/images/girl3.svg")} />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
