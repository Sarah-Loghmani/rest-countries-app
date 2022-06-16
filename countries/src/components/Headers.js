import React from "react";

function Headers() {
  const handleClick = () => {
    const sun = document.querySelector(".dark-mood");
    console.log(sun);
    sun.addEventListener("click", () => {
      document.body.classList.toggle("light-mood");
    });
  };
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div className="dark-mood" onClick={() => handleClick()}>
          <i className="fas fa-sun"></i>
          {/* <i className="fas fa-moon"></i> */}
          <span>Light Mood</span>
        </div>
      </header>
    </>
  );
}

export default Headers;
