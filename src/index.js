import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillList skill="HTML+CSS" color="blue" />

          <SkillList skill="JavaScript" color="yellow" />

          <SkillList skill="Web Design" color="green" />

          <SkillList skill="Git and GitHub" color="red" />

          <SkillList skill="React" color="skyblue" />

          <SkillList skill="Svelte" color="red" />
        </div>
      </div>
    </div>
  );

  function Avatar() {
    const style = { width: "100%", height: "300px" };

    return <img style={style} src="picture/IMG_0007.JPG" alt="portfolio" />;
  }

  function Intro() {
    return (
      <div>
        <h1>AGBASI CHUKWUDUM</h1>
        <p>
          Full-stack web developer and aspiring Tech starup CEO. when not coding
          i love to watch anime, cook and enjoy R&B songs.{" "}
        </p>
      </div>
    );
  }

  function SkillList(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        {props.skill}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
