import React,{useState} from "react";
// import "../index.css";

function Filter() {
const [input, setInput]= useState("")


  // const input = document.querySelector(".filter searchDiv input");
  // console.log(input);

  // input.addEventListener("keyup", (e) => {
    // const value = e.target.value;
    // const { value } = e.target;
    // console.log(value);
    const countryName = document.querySelectorAll(".country-name");
    const handleInput = (e)=>{
      setInput(e.target.value)
      countryName.forEach((name) => {
    const cardParent = document.querySelector(".cardParent");
    if (name.innerText.toLowerCase().includes(input.toLowerCase)) {
      cardParent.style.display = "block";
    } else {
      cardParent.style.display = "none";
    }
    // console.log(name);
  });

}
 

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
            onInput={e=> handleInput(e)}
          />
        </div>

        <div className="region-filter">
          <select name="select" id="select" className="select">
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
