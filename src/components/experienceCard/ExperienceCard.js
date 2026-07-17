import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const accentColor = experience["color"];
    return (
      <div
        className="experience-card"
        style={{
          backgroundColor: `${theme.imageHighlight}33`,
          borderLeft: `4px solid ${accentColor}`,
          boxShadow: `2px 2px 6px ${theme.shadow}`,
        }}
      >
        <div
          className="experience-card-logo-div"
          style={{ boxShadow: `2px 2px 4px ${theme.shadow}` }}
        >
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p className="experience-card-company">
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: accentColor }}
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          {experience["description"] && (
            <p
              className="experience-card-description"
              style={{ color: theme.text }}
            >
              {experience["description"]}
            </p>
          )}
          <ul className="experience-card-feature-list">
            {experience["features"].map((feature) => {
              return (
                <li
                  className="experience-card-feature"
                  style={{ color: theme.text }}
                  key={feature}
                >
                  <span
                    className="experience-card-feature-bullet"
                    style={{ backgroundColor: accentColor }}
                  ></span>
                  {feature.replace(/^-\s*/, "")}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
