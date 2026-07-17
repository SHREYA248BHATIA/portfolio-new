import React from "react";
import "./skillTools.css";
import { tools } from "../../portfolio";
import { Fade } from "react-reveal";

export default function SkillTools(props) {
  const theme = props.theme;
  if (tools.viewSkillBars) {
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="tool-heading">
          <h1 style={{ color: theme.text }}>Development Tools</h1>
        </div>
        <div className="tool-grid">
          {tools.experience.map((exp) => {
            return (
              <div className="tool-chip" key={exp.Stack}>
                <span
                  className="iconify tool-chip-icon"
                  data-icon={exp.icon}
                  style={{ color: exp.color }}
                  data-inline="false"
                ></span>
                <p style={{ color: theme.text }}>{exp.Stack}</p>
              </div>
            );
          })}
        </div>
      </Fade>
    );
  }
  return null;
}
