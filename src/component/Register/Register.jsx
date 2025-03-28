import React, { useState } from 'react'

export default function Register() {

    const [passwordHidden, setPasswordHidden] = useState(true)
    const [password, setPassword] = useState(true)
    return <>



        <div className='min-h-80 py-20'>
            <form class="max-w-md mx-auto">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type={passwordHidden ? 'password' : 'text'} name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer" placeholder=" " required />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    <div><i onClick={() => setPasswordHidden(!passwordHidden)} className={`fa-solid  absolute top-4 right-0 cursor-pointer ${passwordHidden ? 'fa-eye-slash' : 'fa-eye'} `}></i></div>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type={password?'password':'text'} name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer" placeholder=" " required />
                    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    <div><i onClick={() => setPassword(!password)} className={`fa-solid  absolute top-4 right-0 cursor-pointer ${password ? 'fa-eye-slash' : 'fa-eye'} `}></i></div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>

                <button type="submit" class="text-white bg-[#FFBE33] hover:bg-[#ffbe33e6] focus:ring-4 focus:outline-none focus:ring-[#FFBE33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#FFBE33] dark:hover:bg-[#FFBE33] dark:focus:ring-[#ffbe33d0]">Submit</button>
            </form>
        </div>


    </>

}
