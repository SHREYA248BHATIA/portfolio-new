import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

const SECTION_ICONS = {
  Work: "ic:baseline-work",
  "Problem solving skills": "ic:baseline-emoji-events",
};

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const sectionHeaderColor = theme.headerColor;
    const overrides = {
      PanelContainer: {
        style: {
          width: "100%",
          marginBottom: "16px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: `2px 2px 8px ${theme.shadow}`,
        },
      },
      Header: {
        style: ({ $expanded }) => ({
          backgroundColor: sectionHeaderColor,
          color: theme.text,
          fontFamily: "Google Sans Medium",
          fontSize: "22px",
          fontWeight: 500,
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: $expanded ? `1px solid ${theme.shadow}` : "none",
          transition: "filter 0.2s ease",
          ":hover": {
            filter: "brightness(1.08)",
          },
        }),
      },
      ToggleIcon: {
        style: ({ $expanded }) => ({
          color: theme.text,
          width: "22px",
          height: "22px",
          transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }),
      },
      Content: {
        style: ({ $expanded }) => ({
          backgroundColor: theme.body,
          color: theme.text,
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
          borderBottom: "none",
          opacity: $expanded ? 1 : 0,
          transform: $expanded ? "translateY(0)" : "translateY(-12px)",
          transition:
            "opacity 0.35s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s ease",
        }),
      },
    };

    return (
      <div className="experience-accord">
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {this.props.sections.map((section) => {
            const iconName = SECTION_ICONS[section["title"]];
            const title = (
              <div className="accord-panel-title">
                {iconName && (
                  <span className="accord-panel-icon-badge">
                    <span
                      className="iconify"
                      data-icon={iconName}
                      data-inline="false"
                    ></span>
                  </span>
                )}
                <span>{section["title"]}</span>
                <span className="accord-panel-count">
                  {section["experiences"].length}
                </span>
              </div>
            );
            return (
              <Panel
                className="accord-panel"
                title={title}
                key={section["title"]}
                overrides={overrides}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard
                      experience={experience}
                      theme={theme}
                      key={experience["title"] + experience["duration"]}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
