import React from "react";
import Toggle from "react-toggle";

import { useState, useEffect } from "react";

import TopMenu from "./components/TopMenu";
import WordSearch from "./components/WordSearch";
import Results from "./components/Results";

export default function App() {
  const [word, setWord] = useState("keyboard");
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const fetchDefinition = async (searchWord) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      if (!response.ok) {
        throw new Error("Error while doing the request!");
      }
      const data = await response.json();
      setDefinition(data[0]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setDefinition(null);
    }
  };

  useEffect(() => {
    fetchDefinition(word);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDefinition(word);
  };

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="app relative dark:bg-black dark:text-white ">
        <div className="container flex flex-col items-center  h-screen w-3/6 m-auto min-w-[737px]">
          <TopMenu isDark={isDark} setIsDark={setIsDark} />
          <WordSearch
            handleSearch={handleSearch}
            word={word}
            setWord={setWord}
          />
          <Results definition={definition} setDefinition={setDefinition} />
        </div>
      </div>
    </div>
  );
}




