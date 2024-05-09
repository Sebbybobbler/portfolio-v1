import styles from "./Home.module.css";
import banana from "../../assets/images/banana-portfolio.png";
import planet from "../../assets/images/planet-portfolio.png";
import adventures from "../../assets/images/spaceadventure-portfolio.png";
import filter from "../../assets/images/filter-portfolio.png";

function ProjectCard() {
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
      link: "https://github.com/Sebbybobbler/portfolio-solar-system"
    },
    {
      title: "Space Adventure",
      image: adventures,
      description: "Frontend project utilising flexbox and responsive design.",
      alt: "Homepage of a interspace travel agency",
      link: "https://github.com/Sebbybobbler/portfolio-space-adventures"
    },
    {
      title: "Planet Filter",
      image: filter,
      description: "JavaScript project experimenting with filtering elements",
      alt: "Homepage of planets and searchbar",
      link: "https://github.com/Sebbybobbler/portfolio-filter"
    },
  ];

  const projectCard = project.map((item, index) => {
    return (
      <div onClick={()=>{window.open(item.link,"blank")}} className={styles.projectCardWrapper}>
        <h4>{item.title}</h4>
        <img src={item.image} alt={item.alt} />
        <span className={styles.description}>{item.description}</span>
      </div>
    );
  });
  return <div  className={styles.projects}>{projectCard}</div>;
}

function Home() {
  return (
    <div className={styles.wrapper}>
      <ProjectCard />
    </div>
  );
}

export default Home;
