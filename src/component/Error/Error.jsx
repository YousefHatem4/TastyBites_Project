import React from 'react';
import { Link } from 'react-router-dom';
import img from '/public/rafiki.png';
export default function Error(){
  return <>
    <div className="flex items-center justify-center min-h-96 py-14">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
        <img src={img} className='w-full pb-8' alt="" />
        <Link to="/" className="bg-[#FFBE33] text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition">
          Back to Home
        </Link>
      </div>
    </div>
    </>
};
