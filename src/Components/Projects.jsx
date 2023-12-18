import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // data fetching
  useEffect(() => {
    fetch("/public/main.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  // data fetching
  return (
    <>
      <section className="container mx-auto mt-12">
        <div>
          <h1 className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-lime-500">
            Projects
          </h1>
          <Marquee pauseOnHover="false" speed={40}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {projects.map((cards) => (
                <ProjectCard key={cards.id} cards={cards}></ProjectCard>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Projects;
