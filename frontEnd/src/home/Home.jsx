import React from 'react';
import joyStick from "/assets/joy_stick 1.svg"
export default function Home() {
  return (
    <section className="bg-[#39289F] h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-lg">
          <h3 className="text-[#F4A300] text-sm font-semibold mb-2">Proved By prodesigner</h3>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Work that we <br /> produce for our <br /> clients
          </h1>
          <p className="text-[#C6C6C6] text-base mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="bg-[#F4A300] text-white py-3 px-8 rounded-full text-sm font-semibold shadow-lg hover:bg-[#d68900] transition duration-300">
            Get more details
          </button>
        </div>
        <div className="hidden md:block">
          <img src={joyStick} alt="Game Controller" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
