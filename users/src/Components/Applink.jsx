import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi2";
import Home from "./Home";

const Applink = () => {
  const [menu, setMenu] = useState(false);

  // useEffect(() => {
  //   const navbar = document.getElementById("navbar");

  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       navbar?.classList.remove("bg-green-500", "text-white");
  //       navbar?.classList.add("bg-white", "text-black");
  //     } else {
  //       navbar?.classList.remove("bg-white", "text-black");
  //       navbar?.classList.add("bg-green-500", "text-white");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <div
        id="navbar"
        className="sticky transition-all duration-500 ease-in-out shadow-3xl top-0 w-full z-50 sm:w-full sm:flex items-center justify-between h-16 bg-green-500 text-white px-4 py-3"
      >
        <div className="hidden sm:flex sm:px-6 py-3">
          <h1 className="sm:flex hover:text-green-400 transition-all items-center justify-between gap-4 cursor-pointer">
            <HiCubeTransparent /> <span>Prabin Shretsha</span>
          </h1>
        </div>
        <div className="sm:flex">
          <nav className="hidden sm:flex items-center justify-between gap-5">
            <a className="hover:text-green-900 transition-all" href="#">
              Home
            </a>
            <a className="hover:text-green-900 transition-all" href="#about">
              About
            </a>
            <a className="hover:text-green-900 transition-all" href="#services">
              Services
            </a>
          </nav>
          <div className="flex sm:hidden items-center justify-between w-[100%]">
            <h1 className="flex items-center justify-between gap-4 cursor-pointer">
              <HiCubeTransparent /> <span>Prabin Shretsha</span>
            </h1>

            <FiMenu
              className="text-white text-[25px]"
              onClick={() => setMenu(!menu)}
            />
            {menu ? (
              <nav className="flex flex-col absolute top-10 right-0 bg-gray-950 px-5 py-5 items-center justify-between gap-5">
                <a className="hover:text-green-500 transition-all" href="#">
                  Home
                </a>
                <a
                  className="hover:text-green-500 transition-all"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="hover:text-green-500 transition-all"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="hover:text-green-500 transition-all"
                  href="#contact"
                >
                  Contact{" "}
                </a>
              </nav>
            ) : null}
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-between gap-5 px-6 py-3">
          <a
            href="#contact"
            className="border border-green-700 text-gray-900 hover:border-green-800 transition-all px-2 py-1"
          >
            Contact me
          </a>
          <a
            href="#hire"
            className="bg-green-800 hover:bg-green-700 transition-all px-2 py-1"
          >
            Hire me
          </a>
        </div>
      </div>

      <Home />
    </>
  );
};

export default Applink;
