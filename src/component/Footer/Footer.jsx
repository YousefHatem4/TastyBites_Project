import React from 'react'

export default function Footer() {
  return <>
  
  <footer className="sec_bg text-white p-20 text-center">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold sec-font">Contact Us</h3>
          <p className="mt-2"><i class="fa-solid fa-location-dot"></i> masr university</p>
          <p><i class="fa-solid fa-phone py-5"></i> Call +01 1234567890</p>
          <p><i class="fa-solid fa-envelope"></i> team_project@gmail.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold sec-font">TastyBites</h3>
          <p className="mt-2 text-sm">
            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.
          </p>
          <div className="flex justify-center space-x-4 mt-4 ">
            <i className="hover:text-[#FFBE33] fab fa-facebook-f cursor-pointer text-lg"></i>
            <i className="hover:text-[#FFBE33] fab fa-twitter cursor-pointer text-lg"></i>
            <i className="hover:text-[#FFBE33] fab fa-linkedin-in cursor-pointer text-lg"></i>
            <i className="hover:text-[#FFBE33] fab fa-instagram cursor-pointer text-lg"></i>
            <i className="hover:text-[#FFBE33] fab fa-pinterest cursor-pointer text-lg"></i>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold sec-font">Opening Hours</h3>
          <p className="mt-2">Everyday</p>
          <p>10.00 AM - 10.00 PM</p>
        </div>
      </div>
      <div className="mt-8 text-sm">
        <p>© 2025 project team</p>
        <p>© made by EL3TAULA</p>
      </div>
    </footer>
  
  </>
}
