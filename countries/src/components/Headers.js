import React from "react";

function Headers() {

  const handleClick = () => {
    // * clicked item
    const sun = document.querySelector(".dark-mood");

    //* header 
    const header = document.querySelector(".header");

    // *filter
    const regionOptions = document.querySelectorAll("option");
    const input = document.querySelector("input");
    console.log(input);
    // const regionFilter = document.querySelector(
    //   ".filter .region-filter select"
    // );

    // *countries
    const cards = document.querySelectorAll(".grid article");
    const cardsDetails = document.querySelectorAll(".grid .details");


    //* country
    const borders = document.querySelectorAll(".borders ul li");
    // const backLink = document.querySelector(".backLink");
    // console.log(backLink);
    // const img = document.querySelector(".country img");


    // *add event listener
    sun.addEventListener("click", () => {

      document.body.classList.toggle("light-mood");
      // *header
      header.classList.toggle("light-mood");
      input.classList.toggle("light-mood");
      // regionFilter.classList.toggle("light-mood");

      // *filter
      regionOptions.forEach((option) => option.classList.toggle("light-mood"));

      // *countries
      cardsDetails.forEach((detail) => detail.classList.toggle("light-mood"));
      cards.forEach((card) => card.classList.toggle("light-mood"));

      //* country
      borders.forEach((border) => border.classList.toggle("light-mood"));
      // backLink.classList.toggle("light-mood");
      // img.classList.toggle("light-mood");
    });
  };
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div className="dark-mood" onClick={() => handleClick()}>
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          {/* <span className="">Light Mood</span>
          <span className="darkSpan">Dark Mood</span> */}
        </div>
      </header>
    </>
  );
}

export default Headers;
