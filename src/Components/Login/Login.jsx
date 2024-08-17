import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase.config";
import { GlobalStateContext } from "../../Global/GlobalContext";

const Login = () => {

    const { login } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState(null)
    console.log(error);
    const [showPassword, setShowPassword] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const handleProvider = (provider) => {

        return signInWithPopup(auth, provider).then(result => {
            if (result.user) {

                toast.success('Login Successfully');
                navigate(form);
            }
        }).catch(error => {
            console.log(error);
        })
    }


    const onSubmit = (data) => {
        setError('')
        const { email, password } = data;
        login(email, password).then((result) => {
            if (result.user) {
                navigate(form);
                toast.success('Login Successfully');
            }
        })
            .catch((error) => {

                setError(error.message)
            });
    }


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white bg-opacity-50 rounded-lg shadow-md">
                <div className="flex justify-center mx-auto">
                    <Logo />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800">Email</label>
                        <input {...register("email", { required: true })} type="email" id="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                        {errors.email && <span className="text-xs text-red-500">This Email field is required</span>}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                        </div>

                        <div className='relative'>
                            <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                            {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} className="w-5 text-pmColor h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/3fxNPxp/view.png" alt="" /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="w-5 text-pmColor h-5 absolute top-[50%] translate-y-[-50%] right-3" src="https://i.ibb.co/pj04qyJ/hide.png" alt="" />}
                        </div>
                        {errors.password && <span className="text-xs text-red-500">This Password field is required</span>}
                    </div>
                    <span className="text-xs text-red-500">{error}</span>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secColor rounded-lg hover:bg-pmColor focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Login
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b lg:w-1/5"></span>
                </div>

                <div onClick={() => handleProvider(googleProvider)} className="flex items-center mt-6 -mx-2">
                    <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-pmColor rounded-lg hover:bg-secColor focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                    Don't have an account? <Link to="/register" className="font-medium text-gray-700 hover:underline hover:text-pmColor">Create One</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
