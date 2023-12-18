import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import { RotatingTriangles } from "react-loader-spinner";
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-gray-900 h-[100vh] flex justify-center items-center">
          <RotatingTriangles
            visible={true}
            height="180"
            width="180"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        </div>
      ) : (
        <div className="bg-gray-950">
          <Navbar></Navbar>
          <Banner></Banner>
          <Services></Services>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default App;
