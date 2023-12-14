import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

import "./Services.css";

const Services = () => {
  return (
    <div
      data-aos="fade-right"
      id="Services"
      className="p-20 flex flex-col items-center justify-center uppercase"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-lime-500">
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 text-white">
        <div className="service-box">
          <FaHtml5 className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">HTML5</span>
        </div>
        <div className="service-box">
          <IoLogoCss3 className="service-icon  text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">CSS3</span>
        </div>
        <div className="service-box">
          <SiTailwindcss className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Tailwind CSS</span>
        </div>
        <div className="service-box">
          <TbBrandJavascript className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">JavaScript</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <FaReact className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">React</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <FaNode className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Node.js</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <SiExpress className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Express</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <SiMongodb className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">MongoDB</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <SiFirebase className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Firebase</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <SiNetlify className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Netlify</span>
        </div>
        <div data-aos="fade-up" className="service-box">
          <IoLogoVercel className="service-icon text-lime-500 rounded-3xl h-32 w-40 border-2 border-lime-600 b_glow" />
          <span className="tooltip">Vercel</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
