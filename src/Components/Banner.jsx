import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg: py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome to <span className="text-fuchsia-500"> My Website</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum natus
          iure ducimus voluptas totam facere dicta, explicabo nemo porro fuga
          rerum quidem culpa placeat, esse illum inventore consequatur numquam
          voluptatem nisi velit aliquam? Dolorum laudantium quis non id sequi,
          quas hic, quo eum officiis sit quae quod ducimus ipsam. Distinctio?
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2"
              >
                <FaInstagramSquare className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-400 rounded-full glow p-2"
              >
                <FaFacebook className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ----image section */}
    </div>
  );
};

export default Banner;
