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
            {techStack.experience.map((exp) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div className="skill">
                  <p style={{ color: theme.text }}>{exp.Stack}</p>
                  <div
                    className="meter"
                    style={{ backgroundColor: theme.shadow }}
                  >
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
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
