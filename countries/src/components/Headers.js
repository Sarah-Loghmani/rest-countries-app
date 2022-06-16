import React from "react";

function Headers() {
  const handleClick = () => {
    const sun = document.querySelector(".dark-mood");

    const i = document.querySelector(".fa-sun");
    // const iSpan = document.querySelector(".dark-mood span");
    // console.log(iSpan);

    const header = document.querySelector(".header");
    const input = document.querySelector(".form input");
    const regionFilter = document.querySelector(
      ".filter .region-filter select"
    );
    const regionOptions = document.querySelectorAll(
      ".filter .region-filter select option"
    );
    const cardsDetails = document.querySelectorAll(".grid .details");

    // console.log(sun);
    sun.addEventListener("click", () => {
      i.classList.toggle("fa-sun");
      i.classList.toggle("fa-moon");

      // iSpan.classList.toggle("lightSpan")
      // iSpan.classList.toggle("darkSpan");
      document.body.classList.toggle("light-mood");
      header.classList.toggle("light-mood");
      input.classList.toggle("light-mood");
      regionFilter.classList.toggle("light-mood");
      regionOptions.classList.toggle("light-mood");
      cardsDetails.forEach((detail) => {
        detail.classList.toggle("light-mood");
      });
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
          {/* <span className="">Light Mood</span>
          <span className="darkSpan">Dark Mood</span> */}
        </div>
      </header>
    </>
  );
}

export default Headers;
