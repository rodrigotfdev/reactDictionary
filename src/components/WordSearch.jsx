import React from "react";
import { FaSearch } from "react-icons/fa";

export default function WordSearch({ handleSearch, word, setWord }) {
  return (
    <div className="word-search flex items-center w-[736px] bg-searchBackground dark:bg-darkSearch rounded-md mt-[146px] absolute">
      <form onSubmit={handleSearch} className="">
        <input
          type="text"
          name="wordSearchInput"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="min-w-[670px] min-h-[64px] mx-4 rounded-lg font-extrabold bg-searchBackground dark:bg-darkSearch"
          placeholder="Enter a word here"
        />
        <button type="submit">
          <FaSearch className=" text-mainPurple  mr-2" />
        </button>
      </form>
    </div>
  );
}
