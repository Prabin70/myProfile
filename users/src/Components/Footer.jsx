import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="h-[screen]  bg-gray-900  sm:h-screen sm:w-full  ">
        <div className="sm:mx-12 my-0 sm:rounded-b-3xl bg-green-500 sm:bg-green-600 h-[180px] sm:h-[250px] relative sm:flex">
          <img
            src="/src/assets/man-12323.png"
            className=" absolute sm:h-[300px] bottom-0  mx-4 h-[200px] w-auto "
          />
          <div className="">
            <div className="absolute top-6 right-3 sm:right-56 float-right">
              <h1 className="text-white sm:text-[50px] leading-none font-bold ">
                Take the first step to change <br /> your life today!
              </h1>

              <div className="flex  sm:flex gap-4 mt-7">
                <a
                  title="Prabin Shrestha"
                  className="text-[25px] transition-all hover:-translate-y-1   "
                  href="https://www.facebook.com/profile.php?id=100052234549165"
                >
                  <FaFacebook />{" "}
                </a>
                <a
                  title="Prabin70"
                  className="text-[25px] transition-all hover:-translate-y-1  "
                  href="https://github.com/Prabin70"
                >
                  <FaGithub />
                </a>
                <a
                  title="linkedin.com/in/přåbîñ-xtha-0087b6250"
                  className="text-[25px] transition-all hover:-translate-y-1  "
                  href="https://www.linkedin.com/in/p%C5%99%C3%A5b%C3%AE%C3%B1-xtha-0087b6250/"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="block sm:flex items-center px-3 py-4 sm:px-12 sm:py-6 justify-betweenw-[40%] gap-16 mt-10">
            <div className="max-w-[300px] mb-4">
              <h2 className="text-pink-500 text-[30px] sm:mb-6 ">
                Prabin Shrestha
              </h2>
              <p className="text-white">
                Every company require a single website to uplift your business
                and I provide the servces to upgrade your besiness in the world.{" "}
              </p>
            </div>
            <div className="grid grid-cols-3 w-fit justify-between sm:flex items-start sm:justify-between sm:w-[60%] text-gray-100">
              <div className="flex items-start flex-col">
                <h3 className="mt-2 font-bold text-[17px] sm:text-[20px] text-gray-500 sm:mb-6 ">
                  Quick links.
                </h3>
                <a
                  className=" py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="#"
                >
                  Home
                </a>
                <a
                  className=" py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="#about"
                >
                  About
                </a>
                <a
                  className=" py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className=" py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="#contact"
                >
                  Contact
                </a>
              </div>

              <div className="flex items-start flex-col">
                <h3 className="mt-2 font-bold text-[17px] sm:text-[20px] text-gray-500 sm:mb-6 ">
                  Contact info.
                </h3>
                <p className="py-2 sm:py-0 text-[14px]">Kapan, Kathmandu</p>
                <p className="py-2 sm:py-0 text-[14px]">47000</p>
                <a
                  className="py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="tel: +977-9749856214"
                >
                  +977-9749856214
                </a>
                <a
                  className="py-2 sm:py-0 text-[14px] hover:text-gray-400"
                  href="mailto:xthaprabin125@gmail.com"
                >
                  xthaprabin125@gmail.com
                </a>
              </div>

              <div className="flex items-center flex-col">
                <h3 className="mt-2 font-bold text-[17px] sm:text-[20px] text-gray-500 sm:mb-6 ">
                  Follow me.
                </h3>
                <div className="flex items-center flex-col sm:flex sm:flex-row sm:gap-2">
                  <a
                    className="text-[20px] py-2 sm:py-2 hover:text-gray-400 transition-all"
                    href="#"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="text-[20px] py-2 sm:py-2 hover:text-gray-400 transition-all"
                    href="#"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-[20px] py-2 sm:py-2 hover:text-gray-400 transition-all"
                    href="#"
                  >
                    <FaLinkedin />
                  </a>

                  <a className="text-[20px] py-2" href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-12 text-gray-500">
            <hr />
          </div>
          <div className="mt-11 pb-6">
            <p className="text-center text-[14px] text-gray-500">
              Copyright © 2023 Prabin Shrestha. All rights reserved.
            </p>
            <p className="text-center text-[14px] text-gray-500">
              Made with <span className="text-red-500"></span> by{" "}
              <a
                className="text-gray-500"
                href="https://www.linkedin.com/in/p%C5%99%C3%A5b%C3%AE%C3%B1-xtha-0087b6250/"
              >
                Prabin Xtha
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
