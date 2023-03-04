import "./index.scss";
import LogoA from "../../../Assets/images/logo-a.png";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef(); // for container
  const outlineLogoRef = useRef(); // for outline of the logo
  const solidLogoRef = useRef(); // for the solid images

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 6.4,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3.2,
        duration: 6.4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="JavaScript,  Developer"
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 897 897"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none" stroke="#000">
          <path
            ref={outlineLogoRef}
            d="M465.182,32.729l-431.275,863.728l173.626,-0l257.649,-517.715l86.042,169.766l-146.415,1.543l-84.767,171.309l317.49,-0l86.309,175.097l172.616,-0l-431.275,-863.728l-33.907,-32.729l-431.275,863.345l33.907,33.112"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
