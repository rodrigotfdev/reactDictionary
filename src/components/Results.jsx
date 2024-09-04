import React from "react";
import { useState, useEffect } from "react";

export default function Results({ definition, error }) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (definition?.phonetics?.[0]?.audio) {
      const audioUrl = definition.phonetics[0].audio;
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
    } else {
      setAudio(null);
    }
  }, [definition]);

  const playAudio = () => {
    if (audio) {
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    }
  };
  return (
    <div className=" word-results px-4  min-w-[736px] max-w-[736px] mt-[255px] absolute rounded-md">
      {error && <p className="text-red-500">{error}</p>}
      {definition ? (
        <div>
          <div className="flex justify-between bg-white dark:bg-black">
            <div className="">
              <h3 className="text-5xl font-bold  w-[293px] h-[77px]">
                {definition.word}
              </h3>
              <span className="dark:text-mainPurple">
                {definition.phonetic}
              </span>
            </div>
            {audio && (
              <button onClick={playAudio} aria-label="Play pronunciation">
                <img src="/images/icon-play.svg" alt="Play" />
              </button>
            )}
          </div>
          <div className="flex items-center">
            <p className="partOfSpeech mt-8 mb-4">
              {definition.meanings[0].partOfSpeech}
            </p>
            <hr className="w-full mx-2 mt-8 mb-4" />
          </div>
          <div className="mb-4">
            <span>Meaning</span>
          </div>
          <ul className="mx-8">
            {definition.meanings[0].definitions
              .slice(0, 3)
              .map((def, index) => (
                <li
                  key={index}
                  className="list-disc mb-4 marker:text-mainPurple"
                >
                  {def.definition}
                </li>
              ))}
          </ul>
          <div className="flex my-8">
            <span className="mx-4">Synonyms</span>
            <p className="text-mainPurple font-bold">
              {definition?.meanings[0]?.synonyms[0]
                ? definition.meanings[0].synonyms[0]
                : "No synonym found for this word!"}
            </p>
          </div>
          <div className="flex items-center">
            <p className="partOfSpeech mb-6">
              {definition?.meanings[1]?.partOfSpeech}
            </p>
            {definition?.meanings[1]?.partOfSpeech ? (
              <hr className="w-full mx-2 mb-6" />
            ) : (
              ""
            )}
          </div>
          <p className="mb-4">
            {definition?.meanings[1]?.partOfSpeech ? "Meaning" : ""}
          </p>
          <ul className="mx-8 my-8">
            {definition?.meanings[1]?.definitions
              .slice(0, 3)
              .map((def, index) => (
                <li key={index} className="list-disc marker:text-mainPurple">
                  <p>{def.definition}</p>
                  {def.example && (
                    <p className="italic text-gray-600 mb-8">
                      Example: {def.example}
                    </p>
                  )}
                </li>
              ))}
          </ul>
          <hr className="w-full mx-2 mb-6" />
          <div className="flex">
            <p className="mx-4">Source </p>
            <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">
              https://en.wiktionary.org
            </a>
          </div>
        </div>
      ) : (
        !error && <p>No results found.</p>
      )}
    </div>
  );
}
