import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
          <p
            className="skills-header-subtitle subTitle"
            style={{ color: theme.secondaryText }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
