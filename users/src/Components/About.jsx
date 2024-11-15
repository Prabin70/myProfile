import React from "react";
import Services from "./Services";

const About = () => {
  return (
    <div id="about">
      <div className=" block  sm:flex flex-col sm:bg-gray-50 items-center flex-wrap justify-start h-[80vh] w-full px-6 py-6 ">
        <div className="p-4">
          <h1 className="font-bold text-[35px] ">
            {" "}
            <span className="underline decoration-green-600">About</span> Me
          </h1>
        </div>
        <div className="border border-gray-400 sm:h-[50vh] sm:w-[70%] relative flex sm:flex-row flex-col items-start justify-between">
          <div className=" md:h-full bottom-0 left-0 md:w-[40%]">
            <img
              src="/src/assets/aboutme.webp"
              className="h-full sm:absolute p-3"
            />
          </div>
          <aside className="px-4 sm:flex items-center flex-col justify-start sm:max-w-[60%]">
            <div className=" sm:max-w-[50%] ">
              <h2 className=" sm:hidden text-green-700 text-[30px] font-bold ">
                <span className="text-gray-950">My </span>Background
              </h2>
            </div>
            <div className="max-w[50%]">
              <h2 className="my-3 text-[21px] font-extrabold ">Education</h2>
              <p>
                I've completed my school level in{" "}
                <strong>Bansbari Sec. School, Maharajgung. </strong> Next, I
                passed out my high school level from{" "}
                <strong>New Millennium College, Sukedhara;</strong> as a{" "}
                <b>
                  <span className="underline decoration-green-500">
                    Computer Science
                  </span>
                </b>{" "}
                major in 2022 AD.
              </p>
            </div>
            <div className="max-w[50%]">
              <h2 className="my-3 text-[21px] font-extrabold "> Programming</h2>

              <p>
                {" "}
                First, I was familier with HTML, CSS and simple javaScript then
                I've completed my MERN Stack training form{" "}
                <strong>N9 Solution. </strong> Now, I'm doing some small
                projects as a fresher to get hired in company.{" "}
              </p>

              <p></p>
            </div>
          </aside>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default About;
