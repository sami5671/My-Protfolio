import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer mt-10 p-10 text-white justify-around mb-2">
        <nav>
          <header className="text-2xl font-bold">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="text-2xl font-bold">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="text-2xl font-bold">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/sami5671"
              className="text-lime-500 hover:text-white rounded-full glow p-2"
            >
              <FaGithub className="text-[26px]  cursor-pointer"></FaGithub>
            </a>
            <a
              href="https://www.facebook.com/samialam5559"
              className="text-lime-500 hover:text-white rounded-full glow p-2"
            >
              <FaFacebook className="text-[26px]  cursor-pointer"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/in/sami5671/"
              className="text-lime-500 hover:text-white rounded-full glow p-2"
            >
              <FaLinkedin className="text-[26px]  cursor-pointer"></FaLinkedin>
            </a>
            <a className="text-lime-500 hover:text-white rounded-full glow p-2">
              <FaInstagramSquare className="text-[26px]  cursor-pointer"></FaInstagramSquare>
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-[16px] text-slate-400 text-center items-center py-8">
        All Rights are reserved by @sami-2024
      </p>
    </>
  );
};

export default Footer;
