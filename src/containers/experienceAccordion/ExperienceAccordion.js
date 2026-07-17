import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const sectionHeaderColor = "#A8A4F9CC";
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
          transition: "background-color 0.2s ease",
          ":hover": {
            color: theme.text,
          },
        }),
      },
      ToggleIcon: {
        style: {
          color: theme.text,
        },
      },
      Content: {
        style: {
          backgroundColor: theme.body,
          color: theme.text,
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
          borderBottom: "none",
        },
      },
    };

    return (
      <div className="experience-accord">
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {this.props.sections.map((section) => {
            const title = section["icon"] ? (
              <div className="accord-panel-title">
                <img
                  className="accord-panel-icon"
                  src={require(`../../assests/images/${section["icon"]}`)}
                  alt=""
                />
                <span>{section["title"]}</span>
              </div>
            ) : (
              section["title"]
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
