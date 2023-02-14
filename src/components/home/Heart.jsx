import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from 'react-router-dom';

function Heart() {
  const [hovered, setHovered] = useState(false);

  const heartAnimation = useSpring({
    from: {
      transform: "scale(1)",
      color: "red",
    },
    to: {
      transform: hovered ? "scale(1.2)" : "scale(1)",
      color: hovered ? "hotpink" : "red",
    },
    config: {
      tension: 200,
      friction: 10,
    },
  });

  return (
    <>
        <div className='p-3'>
            <Link to="/">
                <button
                 className="btn btn-outline-light border-dark btn-lg text-black">
                    Back to main page
                </button>
            </Link>
            <br></br>
            <br></br>
        </div>
        <animated.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            ...heartAnimation,
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
        <svg viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg" style={{ width: "400px", height: "400px" }}>
            <path
            fill="currentColor"
            d="M16 27.6C16 27.6 0 14.3 0 7.9 0 3.5 3.6 0 8 0c3.4 0 5.4 2.7 8 5.3C16.6 2.7 18.6 0 22 0c4.4 0 8 3.5 8 7.9 0 6.4-16 19.7-16 19.7z"
            text-anchor="middle"
            />
        </svg>
        </animated.div>
    </>

  );
}

export default Heart;
