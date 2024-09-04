import React from 'react'

export default function TopMenu({ isDark, setIsDark }) {
    const toggleDarkMode = () => {
      setIsDark(!isDark);
    };
  
    return (
      <div className="top-menu flex justify-between min-w-[737px] min-h[37px]  dark:bg-black mt-[58px]">
        <div className="logo-img">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className="top-menu-middle flex">
          <h1 className="text-3xl font-extrabold">reactDictionary 📖</h1>
        </div>
        <div className="top-menu-right-side flex">
          <button onClick={toggleDarkMode}>
            <img src="/images/icon-moon.svg" alt="Moon Icon" />
          </button>
        </div>
      </div>
    );
  }
