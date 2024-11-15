import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TypingAnimation from "./TypingAnimation";
import About from "./About";

const Home = () => {
  return (
    <div id="home">
      <div className="hero-section block font- px-3 py-4 md:px-12 md:py-32 md:flex items-start md:justify-between h-screen w-full pt-16  -z-10 bg-white">
        <div className="w-full sm:flex items-center justify-start gap-8 md:w-[50%]">
          <div className="hidden md:flex flex-col gap-5 leading-3">
            <a
              href="https://github.com/Prabin70"
              className="bg-green-500 p-3 text-gray-900 cursor-pointer text-[15px] rounded-full hover:bg-green-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-3 text-gray-900 cursor-pointer text-[15px] rounded-full hover:bg-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-3 text-gray-900 cursor-pointer text-[15px] rounded-full hover:bg-green-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052234549165"
              className="bg-green-500 p-3 text-gray-900 cursor-pointer text-[15px] rounded-full hover:bg-green-600"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className="">
            <h1 className=" font-forHi text-[40px] md:text-[80px] text-gray-950 font-extrabold">
              Hi ! <span className="text-gray-950 text-[30px] ">...</span>
            </h1>
            <p className="text-[25px] md:text-[30px] text-green-600">
              My name is
              <span className="text-gray-950 font-forHi font-semibold">
                {" "}
                Prabin Shretsha
              </span>
            </p>
            <div className=" hidden text-[20px] sm:flex items-center justify-start text-green-600 font-bold md:text-[40px]">
              <span className="hidden md:pr-1 font-light text-gray-9 50 md:flex">
                I'm a
                <TypingAnimation />
              </span>
            </div>
            <div className="flex  sm:hidden">
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
              <span className="text-gray-100 font-extrabold text-[30px]">
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

            <div className=" hidden sm:flex justify-start gap-3 items-center mt-5">
              <button className=" hidden sm:flex text-gray-50 bg-green-600  px-3 py-1 ">
                {" "}
                Download CV{" "}
              </button>
              <button className=" hidden sm:flex text-gray-950 border border-green-600  px-3 py-1 ">
                {" "}
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="">
            <img src="/src/assets/hero.png" className="h-[500px] " />
            {/* <div className="rounded-full h-16  drop-shadow-3xl w-16 absolute top-24">
              <img src="/src/assets/redux.png" alt="" />
            </div>

            <div className="rounded-full h-16  drop-shadow-3xl w-16 absolute top-12 right-10">
              <img src="/src/assets/react.png" alt="" />
            </div> */}
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
            <button className=" text-gray-100 border border-green-600 w-full md:hidden hover:bg-slate-800 px-3 py-1 sm:hidden">
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
