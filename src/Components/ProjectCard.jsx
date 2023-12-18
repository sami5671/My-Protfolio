const ProjectCard = ({ cards }) => {
  // destructure

  const {
    img,
    projectDescription,
    projectName,
    projectType,
    ProjectGithubLinkClient1,
    projectGithubLinkServer1,
    LiveLink1,
    ProjectGithubLinkClient2,
    projectGithubLinkServer2,
    LiveLink2,
    ProjectGithubLinkClient3,
    projectGithubLinkServer3,
    LiveLink3,
  } = cards;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-lime-400">
        <figure>
          <img src={img} className="w-full h-[230px] " alt="projects" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>{projectType}</p>

          <p>{projectDescription}</p>
          <div className="justify-start mt-5 pb-2">
            <a
              href="https://gadget-harbor.web.app/"
              className="border-2 border-lime-500 rounded-xl p-2 font-semibold hover:bg-lime-400 hover:text-white"
            >
              Live Link
            </a>
            <a
              className="border-2 border-lime-500 rounded-xl p-2 font-semibold hover:bg-lime-400 hover:text-white ml-2"
              href=""
            >
              GitHub Client
            </a>
            <a
              className="border-2 border-lime-500 rounded-xl p-2 font-semibold hover:bg-lime-400 hover:text-white ml-2"
              href=""
            >
              GitHub Server
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
