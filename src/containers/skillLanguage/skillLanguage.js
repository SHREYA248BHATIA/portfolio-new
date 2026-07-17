import React from "react";
import "./skillLanguage.css";
import { sLanguage } from "../../portfolio";
import { Fade } from "react-reveal";

export default function SkillLanguage(props) {
  const theme = props.theme;
  if (sLanguage.viewSkillBars) {
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="lskills-heading">
          <h1 style={{ color: theme.text }}>Language / Framework</h1>
        </div>
        <div className="lskills-grid">
          {sLanguage.experience.map((exp) => {
            return (
              <div className="lskill-chip" key={exp.Stack}>
                <span
                  className="iconify lskill-chip-icon"
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
