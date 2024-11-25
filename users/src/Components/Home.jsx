import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TypingAnimation from "./TypingAnimation";
import About from "./About";

const Home = () => {
  return (
    <div id="home">
      <div className="hero-section block font- px-3 py-4 md:px-12 md:py-32 md:flex sm:items-start md:justify-between sm:h-screen w-full pt-14  -z-10 bg-white">
        <div className="w-full sm:flex items-center justify-start gap-8 md:w-[50%]">
          <div className="hidden md:flex flex-col gap-5 leading-3">
            <a
              href="https://github.com/Prabin70"
              className="bg-green-500 p-2 text-gray-900 cursor-pointer text-[12px] rounded-full hover:bg-green-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-2 text-gray-900 cursor-pointer text-[12px] rounded-full hover:bg-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-2 text-gray-900 cursor-pointer text-[12px] rounded-full hover:bg-green-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-2 text-gray-900 cursor-pointer text-[12px] rounded-full hover:bg-green-600"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className="">
            <h1 className=" font-forHi text-[60px] md:text-[80px] text-gray-950 font-extrabold">
              Hi ! <span className="text-gra  y-950 text-[30px] ">...</span>
            </h1>
            <p className="text-[25px] md:text-[30px] text-green-600">
              My name is
              <span className="text-gray-950 font-forHi font-semibold">
                {" "}
                Prabin Shretsha
              </span>
            </p>
            <div className="  text-[20px] sm:flex items-center justify-start text-green-600 font-bold md:text-[40px]">
              <span className=" md:pr-1 font-light flex text-gray-9 50 md:flex">
                <span className="sm:pr-2 pr-2">I'm a</span>
                <TypingAnimation />
              </span>
            </div>
            <div className="hidden  sm:hidden">
              <span className="text-green-600 font-extrabold text-[30px]">
                M
              </span>
              <span className="text-gray-600 font-extrabold text-[30px]">
                E
              </span>
              <span className="text-cyan-600 font-extrabold text-[30px]">
                R
              </span>
              <span className="text-green-800 font-extrabold text-[30px]">
                N
              </span>
              <span className="text-gray-900 font-extrabold  px-1 text-[30px]">
                {" "}
                Stack Developer
              </span>
            </div>

            <p className="hidden md:flex  text-black font-normal tracking-wide pt-5">
              {" "}
              Hello! everyone, My name is Prabin Shretsha and I'm a passionate
              MERN stack developer. I like to do debugging. I love to play with
              computer programs and want to make the software that can solve the
              real world problems.
            </p>

            <div className="  md:hidden sm:flex justify-start gap-3 items-center mt-5">
              <button className=" hidden sm:flex text-gray-50 bg-green-600  px-3 py-1 ">
                {" "}
                Download CV{" "}
              </button>
              <button className=" hidden md:hidden sm:flex text-gray-950 border border-green-600  px-3 py-1 ">
                {" "}
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <img
              src="/src/assets/hero.png"
              className=" text-center h-[360px] sm:h-[550px] "
            />
            <div></div>
          </div>
          <p className=" text-white font-normal tracking-wide pt-5 sm:hidden">
            {" "}
            Hello! everyone, My name is Prabin Shretsha and I'm a passionate
            MERN Stack Developer. I like to do debugging. I love to play with
            computer programs and want to make the software that can solve the
            real world problems.
          </p>

          <div className="flex flex-col justify-start gap-3 items-center mt-5">
            <button className=" text-gray-100 bg-green-600 w-full px-3 py-1  md:hidden hover:bg-green-700 sm:hidden">
              {" "}
              Contact{" "}
            </button>
            <button className=" text-gray-900 border border-green-600 w-full md:hidden hover:bg-slate-800 px-3 py-1 sm:hidden">
              {" "}
              Hire me
            </button>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
