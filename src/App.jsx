import React from "react";
import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <div className="app">
      <div className="container flex flex-col items-center  h-screen bg-red-500 w-3/6 m-auto min-w-[737px]">
        <TopMenu />
        <WordSearch />
        <Results />
      </div>
    </div>
  );
}

function TopMenu() {
  return (
    <div className="top-menu flex justify-between w-[740px]">
      <div className="logo-img">
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className="top-menu-middle flex">
        <span>Font Family</span>
        <span>down arrow</span>
      </div>
      <div className="top-menu-right-side flex">
        <span>Toggler</span>
        <img src="/images/icon-moon.svg" alt="" />
      </div>
    </div>
  );
}

function WordSearch() {
  return (
    <div className="word-search flex items-center">
      <input
        type="text"
        name="wordSearchInput"
        id=""
        className="min-w-[736px] min-h-[64px] mx-4 rounded-lg"
      />
      <FaSearch className="text-2xl text-purple-700" />
    </div>
  );
}

function Results() {
  return (
    <div className="word-results">
      <h2>Results</h2>
    </div>
  )
}
