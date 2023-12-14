import project1 from "../assets/Images/project1.png";
import project2 from "../assets/Images/project2.png";
import project3 from "../assets/Images/project3.png";
import project1a from "../assets/Images/project1a.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-lime-500">
        Projects
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 text-white">
        <a href="https://gadget-harbor.web.app/">
          <img
            width={300}
            className="flex items-center justify-center h-[170px]  p-1 rounded-3xl  border-2 border-lime-600 b_glow"
            src={project1}
            alt=""
          />
        </a>
        <a href="https://luxaura-beauty-client.web.app/">
          <img
            width={300}
            className="flex items-center justify-center h-[170px] p-1 rounded-3xl border-2 border-lime-600 b_glow"
            src={project2}
            alt=""
          />
        </a>
        <a href="https://mermaid-hotel.web.app/">
          <img
            width={300}
            className="flex items-center justify-center h-[170px] p-1 rounded-3xl  border-2 border-lime-600 b_glow"
            src={project3}
            alt=""
          />
        </a>
        <a href="">
          <img
            width={300}
            className="flex items-center justify-center h-[170px] p-1 rounded-3xl border-2 border-lime-600 b_glow"
            src={project1a}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
