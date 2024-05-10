import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import banana from "../../assets/images/banana-portfolio.png";
import planet from "../../assets/images/planet-portfolio.png";
import adventures from "../../assets/images/spaceadventure-portfolio.png";
import filter from "../../assets/images/filter-portfolio.png";
import homer from "../../assets/images/homers-website.png";

const project = [
  {
    title: "Peeling Good",
    image: banana,
    description:
      "A group frontend project designed as part of the TechNative Academy. ",
    alt: "homepage of banana merchants website",
    link: "https://github.com/Sebbybobbler/portfolio-banana",
  },
  {
    title: "Solar System",
    image: planet,
    description:
      "JavaScript project involving JavaScript to display different elements using the DOM.",
    alt: "Homepage of solar system website",
    link: "https://github.com/Sebbybobbler/portfolio-solar-system",
  },
  {
    title: "Space Adventure",
    image: adventures,
    description: "Frontend project utilising flexbox and responsive design.",
    alt: "Homepage of a interspace travel agency",
    link: "https://github.com/Sebbybobbler/portfolio-space-adventures",
  },
  {
    title: "Planet Filter",
    image: filter,
    description: "JavaScript project experimenting with filtering elements",
    alt: "Homepage of planets and searchbar",
    link: "https://github.com/Sebbybobbler/portfolio-filter",
  },
  {
    title: "Simpon's React",
    image: homer,
    description:
      "Recreation of Homer Simpson's first website WARNING: CLICK AT OWN RISK",
    alt: "Homepage of Homer Simpsons Website.",
    link: "https://github.com/Sebbybobbler/homer-react",
  },
];

function ProjectCard({ state }) {
  const projectCard = state.map((item, index) => {
    return (
      <div
        onClick={() => {
          window.open(item.link, "blank");
        }}
        className={styles.projectCardWrapper}
      >
        <h4>{item.title}</h4>
        <img src={item.image} alt={item.alt} />
        <span className={styles.description}>{item.description}</span>
      </div>
    );
  });
  return <div className={styles.projects}>{projectCard}</div>;
}

function Home() {
  let [projectCardAdder, setProjectCardAdder] = useState([
    project[0],
    project[1],
  ]);

  const [isButton, setIsButton] = useState(
    <button onClick={handleClick}>Show More</button>
  );

  useEffect(() => {
    if (projectCardAdder.length === project.length) {
      setIsButton(<></>);
    }
  }, [projectCardAdder]);

  function handleClick(event) {
    if (projectCardAdder.length === project.length) {
      return;
    }
    setProjectCardAdder((prev) => {
      if (!project[prev.length + 1]) {
        return [...prev, project[prev.length]];
      }
      return [...prev, project[prev.length], project[prev.length + 1]];
    });
  }

  return (
    <div className={styles.wrapper}>
      <ProjectCard state={projectCardAdder} />
      {isButton}
    </div>
  );
}

export default Home;
