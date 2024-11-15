import React from 'react'
import { DiCode, DiFirebase } from "react-icons/di"; import { SiTailwindcss } from "react-icons/si";
import Contact from './Contact';

const Services = () => {

  return (
    <div className='mt-60 sm:mt-0'>
      <div id='services' className="block  w-full sm:flex items-center justify-center flex-col sm:h-[80vh] sm:w-full bg-gray-100 p-4">

        <div className="">
          <h5 className=' text-[22px] sm:text-[30px] font-extrabold text-green-600 text-center'>Services</h5>
        </div>
        <div className="my-5">
          <h3 className='text-[22px] sm:text-[40px] font-bold text-center'>This is My Expertise, The Services <br />I'll Provide My Clients</h3>
        </div>
        <div className="block sm:flex items-center justify-start gap-5 ">

          <div className="text-center flex flex-col items-center sm:block boxes sm:text-left mb-4 sm:max-h-[300px] sm:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full sm:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <DiCode />
            </div>

            <h2 className='text-green-700 font-extrabold my-4 text-[23px]'>Web Development</h2>
            <p className='text-[18px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="text-center flex flex-col items-center sm:block boxes sm:text-left mb-4 sm:max-h-[300px] sm:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full sm:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <DiFirebase />
            </div>

            <h2 className='text-green-700 font-extrabold my-4 text-[23px]'>Full Stack</h2>
            <p className='text-[18px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div><div className="text-center flex flex-col items-center sm:block boxes sm:text-left mb-4 sm:max-h-[300px] sm:max-w-[290px] bg-white px-4 py-4">
            <div className="rounded-full sm:rounded-none bg-green-600 px-2 py-2  h-12 w-12 flex items-center justify-center text-[30px]">
              <SiTailwindcss />
            </div>

            <h2 className='text-green-700 font-extrabold my-4 text-[23px]'>Responsive Developer</h2>
            <p className='text-[18px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>


        </div>
      </div>
      <div id="tools">
        <div className="h-[20vh] w-full px-3  py-6  flex items-center justify-center flex-col ">

          <div className=""><h1 className='text-[20px] text-gray-900 my-5 '>My expertise services to my clients</h1></div>

          <div className="flex sm:flex items-center  justify-center sm:gap-3 animate-blink-animate mb-5">
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/html.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/css.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/tailwind.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/js.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/express.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/mongo.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/react.png" />
            <img className='h-[30px] max-w-none px-2 py-1 sm:h-[40px] w-auto' src="/src/assets/redux.png" />
          </div>




        </div>
      </div>
      <Contact />

    </div>
  )
}

export default Services;
