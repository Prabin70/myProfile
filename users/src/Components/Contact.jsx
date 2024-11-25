import { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };

    try {
      let result = await axios({
        url: `http://localhost:5000/webuser`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setName("");
      setLastName("");
      setEmail("");
      setMessage("");
      toast.success(result.data.message);
    } catch (error) {
      console.log("Error occured while sending message", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div
        id="contact"
        className=" h-[60vh] sm:h-[100vh] w-full flex flex-row-reverse items-center justify-center gap-20  sm:px-12 sm:py-6 bg-gray-50 bg-cover bg-center "
      >
        <div className="hidden sm:flex">
          <img
            src="/src/assets/service.png"
            className="h-[500px] opacity-15 "
          />
        </div>

        <div className=" border border-transparent  py-8 rounded-lg sm:flex items-center justify-center h-[450px] w-[300px] sm:w-[500px] sm:h-[400px] ">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-[30px]">Contact </h2>
              <p className="text-green-600">We will get back to you asap!</p>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row gap-3 sm:w-1/2">
              <input
                id="name"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className=" w-full  sm:w-auto outline-none border border-b-gray-200  focus:border-b-gray-600 bg-gray-50 px-2 py-1 focus:bg-gray-50"
                type="text"
                placeholder="First Name *  "
                required
              />
              <input
                id="lastName"
                value={lastName}
                name="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className=" w-full  sm:w-auto outline-none border border-b-gray-200  focus:border-b-gray-600 bg-gray-50 px-2 py-1 focus:bg-gray-50"
                type="text"
                placeholder="Last Name "
              />
            </div>
            <div className="mt-4">
              <input
                id="email"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className=" w-full  outline-none border border-gray-200 rounded-sm bg-gray-50 px-2 py-1  focus:border-b-gray-500  focus:bg-gray-50"
                type="email"
                placeholder="Email *"
                required
              />
            </div>
            <div className="mt-4">
              <textarea
                value={message}
                id="message"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="border bg-gray-50 px-2 py-1 w-full outline-none h-[100px]  rounded-none resize-none focus:bg-gray-50 focus:border-gray-500"
                placeholder="Message here *"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-green-600 hover:bg-green-500 transition-all px-2 py-1 rounded-sm text-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
