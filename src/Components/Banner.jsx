import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import protfolio from "../assets/Images/protfolio.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <section>
      <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg: py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] font-semibold mb-8 leading-normal "
          >
            Hi, There.... <br />
            <span className="text-lime-500 text-2xl lg:text-[52px]">
              I Am Md Sami Alam
            </span>
          </h1>
          <p data-aos="fade-left" className="">
            Passionate web artisan with a mastery of HTML, CSS, Tailwind CSS,
            React, JavaScript, Node, and ExpressJs. I breathe life into digital
            realms, sculpting responsive, dynamic web experiences. My heart
            beats for crafting elegant interfaces that seamlessly captivate
            users. Excited to infuse your team with technical prowess and
            boundless creativity!
          </p>

          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href="https://github.com/sami5671"
                  className="text-lime-500 hover:text-white rounded-full glow p-2"
                >
                  <FaGithub className="text-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sami5671/"
                  className="text-lime-500 hover:text-white rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-lime-500 hover:text-white rounded-full glow p-2"
                >
                  <FaInstagramSquare className="text-[28px]" />
                </a>
                <a
                  href="https://www.facebook.com/samialam5559"
                  className="text-lime-500 hover:text-white rounded-full glow p-2"
                >
                  <FaFacebook className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ----image section */}
        <img
          src={protfolio}
          width={290}
          height={290}
          className="rounded-full border-4 border-lime-600 img_glow"
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
