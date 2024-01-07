import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
// import logo from "../assets/Images/logo1.jpg";
import ResumeButton from "./ResumeButton";
// import { FaDollarSign } from "react-icons/fa6";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded glow">
              Home
            </li>
          </Link>
          {/* <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded glow">
              About
            </li>
          </Link> */}
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded glow">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded glow">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded glow">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          {/* <a href="/">
            <FaDollarSign className="font-bold text-3xl" />
          </a> */}
          <span className="mr-12 lg:px-28">
            <ResumeButton></ResumeButton>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-lime-400 transition border-b-2 border-slate-900 hover:border-lime-400 cursor-pointer ">
                  Home
                </li>
              </Link>
              {/* <Link spy={true} smooth={true} to="About">
                <li className="hover:text-lime-400 transition border-b-2 border-slate-900 hover:border-lime-400 cursor-pointer ">
                  About
                </li>
              </Link> */}
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-lime-400 transition border-b-2 border-slate-900 hover:border-lime-400 cursor-pointer ">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-lime-400 transition border-b-2 border-slate-900 hover:border-lime-400 cursor-pointer ">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-lime-400 transition border-b-2 border-slate-900 hover:border-lime-400 cursor-pointer ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* --======= */}

        <div>{click && content}</div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes></FaTimes> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
