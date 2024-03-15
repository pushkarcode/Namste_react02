import { Input } from "postcss";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-[50vw] mx-auto p-10 ">
      <h1 className="text-center font-bold text-[3vw] leading-none tracking-tight   p-3 mb-12">
        ContactUs
      </h1>
      <input
        className="outline-none border-[1px] border-zinc-500 rounded-lg text-lg font-light p-2 ml-2 mr-8"
        type="text"
        placeholder="name.."
      />
      <input
        className="outline-none border-[1px] border-zinc-500 rounded-lg text-lg font-light p-2 ml-2 mr-8"
        type="text"
        placeholder="message"
      />
      <button className="px-4 py-2 border-[1.2px] border-zinc-500 rounded-lg">
        Send
      </button>
    </div>
  );
};
export default ContactUs;
