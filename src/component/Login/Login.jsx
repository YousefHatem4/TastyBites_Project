import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { userContext } from '../Context/userContext';

export default function Login() {
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setUserToken } = useContext(userContext);

    async function login(values) {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.post('https://eldeeb.pythonanywhere.com/api/auth/login/', values);
            localStorage.setItem('userToken', data.access);
            setUserToken(data.access);
            console.log("API Response:", data); // Should show {token: "abc123", ...}
            navigate('/');
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: login,
    });

    return (
        <div className="min-h-160 py-50">
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                        placeholder=" "
                        disabled={loading}
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={passwordHidden ? 'password' : 'text'}
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#FFBE33] focus:outline-none focus:ring-0 focus:border-[#FFBE33] peer"
                        placeholder=" "
                        disabled={loading}
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#FFBE33] peer-focus:dark:text-[#FFBE33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    <div>
                        <i
                            onClick={() => setPasswordHidden(!passwordHidden)}
                            className={`fa-solid absolute top-4 right-0 cursor-pointer ${passwordHidden ? 'fa-eye-slash' : 'fa-eye'}`}
                        ></i>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    )}
                </div>

                <div className="flex flex-col gap-2 md:flex-row items-center md:justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="text-white bg-[#FFBE33] hover:bg-[#ffbe33e6] focus:ring-4 focus:outline-none focus:ring-[#FFBE33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#FFBE33] dark:hover:bg-[#FFBE33] dark:focus:ring-[#ffbe33d0] hover:cursor-pointer disabled:opacity-70"
                    >
                        {loading ? 'Logging in...' : 'Submit'}
                    </button>
                    <Link to="/register" className="text-[#FFBE33] uppercase hover:text-[#ffbe33e6]">
                        Not Have Email
                    </Link>
                </div>
            </form>
        </div>
    );
}