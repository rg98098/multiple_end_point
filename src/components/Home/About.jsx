import React, { useEffect, useState } from "react";

const About = ({ handler }) => {
  const [toggle, setToggle] = useState(true);
  const handlerCallback = () => {
    setToggle((toggle) => !toggle);
    handler(toggle);
  };
  useEffect(() => {
    const handleBackBtn = () => {
      window.history.pushState(null, window.location.href);
    };
    handleBackBtn();
    window.addEventListener("popstate", handleBackBtn);
    return () => {
      window.removeEventListener("popstate", handleBackBtn);
    };
  }, []);
  return (
    <>
      <div>About</div>
      <button onClick={handlerCallback}>
        {toggle ? "Navigation Off" : "Navigation On"}
      </button>
    </>
  );
};

export default About;
