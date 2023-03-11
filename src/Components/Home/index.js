import { Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect } from "react";
import AnimateLetters from "../AnimateLetters";
import Loader from "react-loaders";
import Programming from "../../Assets/images/Programming-amico.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "A", "d", "i", "t", "y", "a"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    async function timeOut() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    }
    timeOut();
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <AnimateLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimateLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer | Freelancer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img
          className="solid-logo"
          src={Programming}
          alt="JavaScript,  Developer"
        />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
