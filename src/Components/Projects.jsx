import img1p1 from "../assets/Images/img1P1.png";
import img2p1 from "../assets/Images/img2P1.png";
import img3p1 from "../assets/Images/img3P1.png";
import img4p1 from "../assets/Images/img4P1.png";

import { GiLaptop } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <section id="Projects" className="container mx-auto mt-12">
        <h1 className="text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-lime-500">
          Projects
        </h1>

        {/* ---Project 1--- */}
        <div className="card px-3 flex flex-col lg:flex-row bg-slate-800 shadow-xl">
          {/* ----carosel---- */}
          <div className="p-4">
            <div className="carousel  lg:w-[600px] lg:h-[300px]">
              <div id="item1" className="carousel-item w-full">
                <img src={img1p1} className="w-full rounded-lg shadow-2xl" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src={img2p1} className="w-full rounded-lg" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src={img3p1} className="w-full rounded-lg" />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img src={img4p1} className="w-full rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
          {/* ========= */}

          <div className="text-white mt-4">
            <h2 className="text-white font-bold lg:text-4xl mb-2">
              Gadget Harbor
            </h2>
            <p className="mb-4 text-xl">MERN Stack Website</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore, amet blanditiis quae voluptatem enim quisquam fugiat
              obcaecati doloribus culpa eum maxime distinctio quam pariatur
              animi reiciendis officiis. Ab, tempora?
            </p>
            <div className="mt-4 flex flex-col">
              <div className="mb-4">
                <h1 className="font-bold text-2xl mb-2">Technology: </h1>
                <div className="flex flex-wrap gap-2">
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    ReactJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    ExpressJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    MongoDB
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    NodeJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    TanStack Query
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="p-2 bg-lime-700 rounded-md mb-2">
                  Daisy Ui
                </span>
                <span className="p-2 bg-lime-700 rounded-md mb-2">Vercel</span>
                <span className="p-2 bg-lime-700 rounded-md mb-2">
                  Firebase
                </span>
              </div>
            </div>
            {/*  */}
            <div className="text-white mt-4 flex gap-1 lg:gap-4 mb-2">
              <a
                href="https://gadget-harbor.web.app/"
                className="bg-slate-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <GiLaptop className="text-xl" />
                  Live Site
                </span>
              </a>
              <a
                href="https://github.com/sami5671/Gadget-Harbor-Client"
                className="bg-green-700 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <FaGithub className="text-xl" />
                  Client Site
                </span>
              </a>
              <a
                href="https://github.com/sami5671/Gadget-Harbor-Server"
                className="bg-orange-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <FaGithub className="text-xl" />
                  Server Site
                </span>
              </a>
            </div>
            {/*  */}
          </div>
          {/* ====== */}
        </div>
        {/* ---Project 1--- */}

        {/* ---Project 2--- */}
        <div className="card mt-24 px-3 flex flex-col lg:flex-row bg-slate-800 shadow-xl">
          {/* ----carosel---- */}
          <div className="p-4">
            <div className="carousel  lg:w-[600px] lg:h-[300px]">
              <div id="item5" className="carousel-item w-full">
                <img src={img4p1} className="w-full rounded-lg shadow-2xl" />
              </div>
              <div id="item6" className="carousel-item w-full">
                <img src={img4p1} className="w-full rounded-lg" />
              </div>
              <div id="item7" className="carousel-item w-full">
                <img src={img4p1} className="w-full rounded-lg" />
              </div>
              <div id="item8" className="carousel-item w-full">
                <img src={img4p1} className="w-full rounded-lg" />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item5" className="btn btn-xs">
                1
              </a>
              <a href="#item6" className="btn btn-xs">
                2
              </a>
              <a href="#item7" className="btn btn-xs">
                3
              </a>
              <a href="#item8" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
          {/* ========= */}

          <div className="text-white mt-4">
            <h2 className="text-white font-bold lg:text-4xl mb-2">
              Gadget Harbor
            </h2>
            <p className="mb-4 text-xl">MERN Stack Website</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore, amet blanditiis quae voluptatem enim quisquam fugiat
              obcaecati doloribus culpa eum maxime distinctio quam pariatur
              animi reiciendis officiis. Ab, tempora?
            </p>
            <div className="mt-4 flex flex-col">
              <div className="mb-4">
                <h1 className="font-bold text-2xl mb-2">Technology: </h1>
                <div className="flex flex-wrap gap-2">
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    ReactJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    ExpressJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    MongoDB
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    NodeJs
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    TanStack Query
                  </span>
                  <span className="p-2 bg-lime-700 rounded-md mb-2">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="p-2 bg-lime-700 rounded-md mb-2">
                  Daisy Ui
                </span>
                <span className="p-2 bg-lime-700 rounded-md mb-2">Vercel</span>
                <span className="p-2 bg-lime-700 rounded-md mb-2">
                  Firebase
                </span>
              </div>
            </div>
            {/*  */}
            <div className="text-white mt-4 flex gap-1 lg:gap-4 mb-2">
              <a
                href=""
                className="bg-slate-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <GiLaptop className="text-xl" />
                  Live Site
                </span>
              </a>
              <a
                href=""
                className="bg-green-700 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <FaGithub className="text-xl" />
                  Client Site
                </span>
              </a>
              <a
                href=""
                className="bg-orange-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
              >
                <span className="flex gap-2 items-center">
                  <FaGithub className="text-xl" />
                  Server Site
                </span>
              </a>
            </div>
            {/*  */}
          </div>
          {/* ====== */}
        </div>
        {/* ---Project 2--- */}
      </section>
    </>
  );
};

export default Projects;
