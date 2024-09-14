import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skills />
        {/*<div className="skill-list"></div>
        
        */}
      </div>
    </div>
  );

  function Avatar() {
    const style = { width: "100%", height: "300px" };

    return <img style={style} src="" alt="portfolio" />;
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

  function Skills() {
    const skillSet = skills;

    return (
      <div className="skill-list">
        {skillSet.map((skil) => (
          <SkillList key={skil.skill} skillobj={skil} />
        ))}
      </div>
    );
  }

  function SkillList({ skillobj }) {
    return (
      <div className="skill" style={{ backgroundColor: skillobj.color }}>
        {skillobj.level === "beginner" && skillobj.skill + "👶"}
        {skillobj.level === "intermediate" && skillobj.skill + "💪"}
        {skillobj.level === "advanced" && skillobj.skill + "💪"}
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
