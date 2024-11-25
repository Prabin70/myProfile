import React from "react";
import { DiCode, DiFirebase } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import Contact from "./Contact";

const Services = () => {
  return (
    <div className="mt-80 ">
      <div
        id="services"
        className="block  w-full md:flex items-center justify-center flex-col md:h-[80vh] md:w-full bg-gray-100 p-4"
      >
        <div className="">
          <h5 className=" text-[22px] md:text-[30px] font-extrabold text-green-600 text-center">
            Services
          </h5>
        </div>
        <div className="my-5">
          <h3 className="text-[22px] md:text-[40px] font-semibold text-center">
            This is My Expertise, The Services <br />
            I'll Provide My Clients
          </h3>
        </div>
        <div className="block md:flex items-center justify-start gap-5 ">
          <div className="text-center flex flex-col items-center md:block boxes md:text-left mb-4 md:max-h-[300px] md:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full md:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <DiCode />
            </div>

            <h2 className="text-green-700 font-extrabold my-4 text-[23px]">
              Web Development
            </h2>
            <p className="text-[18px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="text-center flex flex-col items-center md:block boxes md:text-left mb-4 md:max-h-[300px] md:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full md:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <DiFirebase />
            </div>

            <h2 className="text-green-700 font-extrabold my-4 text-[23px]">
              Full Stack
            </h2>
            <p className="text-[18px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="text-center flex flex-col items-center md:block boxes md:text-left mb-4 md:max-h-[300px] md:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full md:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <SiTailwindcss />
            </div>

            <h2 className="text-green-700 font-extrabold my-4 text-[23px]">
              Responsive Developer
            </h2>
            <p className="text-[18px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div id="tools">
        <div className="h-[20vh] w-full px-3  py-6  flex items-center justify-center flex-col ">
          <div className="">
            <h1 className="text-[20px] text-green-600 my-5 ">
              My expertise services to my clients
            </h1>
          </div>

          <div className="flex md:flex items-center  justify-center md:gap-3 animate-blink-animate mb-5">
            <img
              title="HTML"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/html.png"
            />
            <img
              title="CSS"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/css.png"
            />
            <img
              title="Tailwind"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/tailwind.png"
            />
            <img
              title="JavaScript"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/js.png"
            />
            <img
              title="Express"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/express.png"
            />
            <img
              title="MongoDB"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/mongo.png"
            />
            <img
              title="Reatc"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/react.png"
            />
            <img
              title="ReduxToolKit"
              className="h-[30px] max-w-none px-2 py-1 md:h-[40px] w-auto"
              src="/src/assets/redux.png"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Services;
