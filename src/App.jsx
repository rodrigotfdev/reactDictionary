import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  const fetchDefinition = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        throw new Error("Error while doing the request!");
      }
      const data = await response.json();
      setDefinition(data[0]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDefinition();
  };

  return (
    <div className="app relative">
      <div className="container flex flex-col items-center  h-screen bg-red-500 w-3/6 m-auto min-w-[737px]">
        <TopMenu />
        <WordSearch handleSearch={handleSearch} word={word} setWord={setWord} />
        <Results definition={definition} setDefinition={setDefinition} />
      </div>
    </div>
  );
}

function TopMenu() {
  return (
    <div className="top-menu flex justify-between min-w-[737px] min-h[37px] bg-purple-500 mt-[58px]">
      <div className="logo-img">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="top-menu-middle flex">
        <span>Font Family</span>
        <span>down arrow</span>
      </div>
      <div className="top-menu-right-side flex">
        <span>Toggler</span>
        <img src="/images/icon-moon.svg" alt="Moon Icon" />
      </div>
    </div>
  );
}

function WordSearch({ handleSearch, word, setWord }) {
  return (
    <div className="word-search flex items-center w-[736px] bg-white rounded-md mt-[146px] absolute">
      <form onSubmit={handleSearch} className="">
        <input
          type="text"
          name="wordSearchInput"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="min-w-[670px] min-h-[64px] mx-4 rounded-lg"
          placeholder="Enter a word here"
        />
        <button type="submit">
          <FaSearch className=" text-purple-700 bg-white mr-2" />
        </button>
      </form>
    </div>
  );
}

function Results({ definition, error }) {
  return (
    <div className="word-results px-4 bg-blue-500 max-w-[736px] mt-[255px] absolute rounded-md">
      {error && <p className="text-red-500">{error}</p>}
      {definition ? (
        <div>
          <div className="flex justify-between bg-white">
            <div className="bg-purple-500">
              <h3 className="text-5xl font-bold uppercase w-[293px] h-[77px]">
                {definition.word}
              </h3>
              <span>{definition.phonetic}</span>
            </div>
            <img src="/images/icon-play.svg" alt="" className="mx-4" />
          </div>
          <div className="flex items-center">
            <p className="partOfSpeech">
              {definition.meanings[0].partOfSpeech}
            </p>
            <hr className="w-full mx-2" />
          </div>
          <span>Meaning</span>
          <ul className="mx-8">
            {definition.meanings[0].definitions
              .slice(0, 3)
              .map((def, index) => (
                <li key={index} className="list-disc">
                  {def.definition}
                </li>
              ))}
          </ul>
          <div className="flex">
            <span className="mx-4">Synonyms</span>
            <p className="text-purple-500 font-bold">
              {definition?.meanings[0]?.synonyms[0]
                ? definition.meanings[0].synonyms[0]
                : "No synonym found for this word!"}
            </p>
          </div>
          <div className="flex items-center">
            <p className="partOfSpeech">
              {definition?.meanings[1]?.partOfSpeech}
            </p>
            {definition?.meanings[1]?.partOfSpeech ? (
              <hr className="w-full mx-2" />
            ) : (
              ""
            )}
          </div>
          <span>{definition?.meanings[1]?.partOfSpeech ? "Meaning" : ""}</span>
          <ul className="mx-8">
            {definition?.meanings[1]?.definitions
              .slice(0, 3)
              .map((def, index) => (
                <li key={index} className="list-disc">
                  <p>{def.definition}</p>
                  {def.example && (
                    <p className="italic text-gray-600">
                      Example: {def.example}
                    </p>
                  )}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        !error && <p>No results found.</p>
      )}
    </div>
  );
}
