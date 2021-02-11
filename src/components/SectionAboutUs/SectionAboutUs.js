import React from "react";
import StatementCard from "../StatementCard/StatementCard";
import "./SectionAboutUs.css";

class SectionAboutUs extends React.Component {
  render() {
    return (
      <section className="section-container section-about-us">
        <h1 style={{ textAlign: "center" }}>About Us</h1>
        <p style={{ textAlign: "justify" }}>
          Developer Student Club Taft is a community of students in De La Salle
          University – Manila which focuses on building technological solutions
          for the development of different communities. This Google program aims
          to help students learn web development, mobile development and other
          emerging technologies thereby implementing these technologies to solve
          real-world community problems.
        </p>
        <div className="section-container__statement-list">
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="star-outline"
              header="Mission"
              text="Aim to empower students to utilize Google’s technologies in working together to developsolutions to address the concerns of local communities and will be able to enhance the students’ personal and professional network in the field of technology."
            />
          </div>
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="eye-outline"
              header="Vision"
              text="We envision Lasallian students to grow as developers for the community."
            />
          </div>
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="people"
              header="Goal"
              text="Aims to empower students to be community-driven developers."
            />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;