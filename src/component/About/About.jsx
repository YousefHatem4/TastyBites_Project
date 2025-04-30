import React from 'react';

export default function About() {
  return (
    <div className="bg-[#232a36] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/src/assets/about-img.png" 
            alt="About Feane"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* النص */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="home-font text-4xl sm:text-5xl font-bold mb-6 text-center md:text-left">
            We Are Feane
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
      </div>
    </div>
  );
}
