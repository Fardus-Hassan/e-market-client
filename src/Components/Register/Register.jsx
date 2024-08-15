import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white bg-opacity-50 rounded-lg shadow-md">
                <div className="flex justify-center mx-auto">
                    <Logo />
                </div>

                <form className="mt-6">
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800">Your Name</label>
                        <input type="text" id="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                        </div>

                        <input type="email" id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                        </div>

                        <input type="password" id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm-password" className="block text-sm text-gray-800">Confirm Password</label>
                        </div>

                        <input type="password" id="confirm-password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secColor rounded-lg hover:bg-pmColor focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                    Have an account? <Link to="/login" className="font-medium text-gray-700 hover:underline hover:text-pmColor">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;