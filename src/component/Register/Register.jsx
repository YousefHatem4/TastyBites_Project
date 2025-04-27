import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import axios from 'axios';

export default function Register() {
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    let { setUserToken } = useContext(userContext);

    async function register(values) {
        try {
            setLoading(true);
            setError(null);
            let { data } = await axios.post(`https://eldeeb.pythonanywhere.com/api/auth/register/`, values);
            localStorage.setItem('userToken', data.access);
            setUserToken(data.access);
            navigate('/login');
        } catch (error) {
            console.error("Registration Error:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        first_name: Yup.string()
            .matches(/^[A-Za-z]+$/, 'First name must only contain letters')
            .required('First name is required'),
        last_name: Yup.string()
            .matches(/^[A-Za-z]+$/, 'Last name must only contain letters')
            .required('Last name is required'),
        phone_number: Yup.string()
            .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Phone number is not valid')
            .required('Phone number is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            phone_number: ''
        },
        validationSchema,
        onSubmit: register
    });

    return (
        <div className="min-h-135 py-20">
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                {/* Email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                                   border-gray-300 appearance-none dark:text-black dark:border-gray-600 
                                   dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                        placeholder=" "
                        disabled={loading}
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                                                      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                      peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] 
                                                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                                      peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={passwordHidden ? 'password' : 'text'}
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                                   border-gray-300 appearance-none dark:text-black dark:border-gray-600 
                                   dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                        placeholder=" "
                        disabled={loading}
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                                                      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                      peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] 
                                                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                                      peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    <div>
                        <i
                            onClick={() => setPasswordHidden(!passwordHidden)}
                            className={`fa-solid absolute top-4 right-0 cursor-pointer ${passwordHidden ? 'fa-eye-slash' : 'fa-eye'}`}
                        ></i>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                    )}
                </div>

                {/* Phone Number */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                                   border-gray-300 appearance-none dark:text-black dark:border-gray-600 
                                   dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                        placeholder=" "
                        disabled={loading}
                    />
                    <label htmlFor="phone_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                                                          duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                          peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] 
                                                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                                          peer-focus:scale-75 peer-focus:-translate-y-6">
                        Phone number
                    </label>
                    {formik.touched.phone_number && formik.errors.phone_number && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.phone_number}</div>
                    )}
                </div>

                {/* First and Last Name */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            value={formik.values.first_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                                       border-gray-300 appearance-none dark:text-black dark:border-gray-600 
                                       dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                            placeholder=" "
                            disabled={loading}
                        />
                        <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                                                                  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                                  peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] 
                                                                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                                                  peer-focus:scale-75 peer-focus:-translate-y-6">
                            First name
                        </label>
                        {formik.touched.first_name && formik.errors.first_name && (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.first_name}</div>
                        )}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            value={formik.values.last_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
                                       border-gray-300 appearance-none dark:text-black dark:border-gray-600 
                                       dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                            placeholder=" "
                            disabled={loading}
                        />
                        <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
                                                                  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                                  peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] 
                                                                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                                                  peer-focus:scale-75 peer-focus:-translate-y-6">
                            Last name
                        </label>
                        {formik.touched.last_name && formik.errors.last_name && (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.last_name}</div>
                        )}
                    </div>
                </div>

                {/* Submit and Link */}
                <div className="flex flex-col gap-2 md:flex-row items-center md:justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white bg-[#FFBE33] hover:bg-[#ffbe33e6] focus:ring-4 focus:outline-none focus:ring-[#FFBE33] 
                                   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#FFBE33] 
                                   dark:hover:bg-[#FFBE33] dark:focus:ring-[#ffbe33d0] hover:cursor-pointer disabled:opacity-70"
                    >
                        {loading ? 'Registering...' : 'Submit'}
                    </button>
                    <Link to="/login" className="text-[#FFBE33] uppercase hover:text-[#ffbe33e6]">
                        Have Email Already
                    </Link>
                </div>
            </form>
        </div>
    );
}