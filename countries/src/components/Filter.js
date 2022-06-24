import React, { useState } from "react";

function Filter() {
  const [input, setInput] = useState("");

  const cards = document.querySelectorAll(".grid .cardParent .card");
  console.log(cards);

  const handleKeyup = (e) => {
    setInput(e.target.value.toLowerCase());
    cards.forEach((card) => {
      if (card.innerText.toLowerCase().includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
      // console.log(name);
    });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <section className="filter">
        <div className="searchDiv">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search country"
            autoComplete="off"
            value={input}
            onChange={(e) => handleKeyup(e)}
          />
        </div>

        <div className="region-filter">
          <select
            name="select"
            id="select"
            className="select"
            
            onChange={(e) => handleSelect(e)}
          >
            <option value="Filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default Filter;
