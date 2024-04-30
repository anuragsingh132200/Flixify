import React, { useState } from "react";
import Card from "./card";
import data from "../data";
import Logo from "../FLIXIFY.png";
import "../App.css";
export default function Widget() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.movietitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "" || item.moviegenres.includes(selectedGenre)) &&
      (selectedLanguage === "" ||
        item.movielanguages.includes(selectedLanguage))
  );

  return (
    <>
      <div className="bg-black text-white w-full p-4 fixed z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <img src={Logo}></img>
          </div>
          <div className="w-[70vw]">
            <input
              type="text"
              placeholder="Search Movie Name"
              className="bg-zinc-800 md:w-[40vw] m-2 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className="bg-zinc-800 ml-2  rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Movie Genre</option>
              <option value="Romance">Romance</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Biography">Biography</option>
              <option value="Family">Family</option>
              <option value="Horror">Horror</option>
              <option value="Crime">Crime</option>
            </select>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-zinc-800 m-2  rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Search Movie Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Hindi">Hindi</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Kannada">Kannada</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Oriya">Oriya</option>
              <option value="Bengali">Bengali</option>
              <option value="Assamese">Assamese</option>
              <option value="Sinhal">Sinhala</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Korean">Korean</option>
              <option value="Turkish">Turkish</option>
              <option value="Urdu">Urdu</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Marathi">Marathi</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="Haryanvi">Haryanvi</option>
              <option value="Nepali">Nepali</option>
              <option value="Swahili">Swahili</option>
            </select>
          </div>
        </div>
      </div>

      <div className="cards-container md:pt-[15vh] pt-[20vh]">
        {filteredData.map((item) => {
          return <Card key={item.imdbmovieid} movie={item} />;
        })}
      </div>
    </>
  );
}
