import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { GlobalStateContext } from "../../Global/GlobalContext";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const Register = () => {

    const { register: regis, setUser } = useContext(GlobalStateContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const form = location?.state || '/';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleProvider = (provider) => {

        return signInWithPopup(auth, provider).then(result => {
            if (result.user) {

                toast.success('Login Successfully');
                navigate(form);
            }
        }).catch(error => {
            console.log(error)
        })
    }


    const onSubmit = (data) => {
        const { name, email, password, Cpassword } = data;

        if (password.length < 6) {
            return setError('Password should be at least 6 characters')
        }
        if (password !== Cpassword) {
            return setError('Password and Confirm password do not match')
        }
        reset()

        regis(email, password).then((result) => {

            const user = result.user;
            setUser(user)

            updateProfile(auth.currentUser, {

                displayName: name,
            })
                .then(() => {
                    toast.success('Register Successfully');
                    navigate(form)

                }).catch((error) => {

                    setError(error.message)
                });

        })
            .catch((error) => {
                console.log(error);
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
                        <label htmlFor="username" className="block text-sm text-gray-800">Your Name</label>
                        <input {...register("name", { required: true })} type="text" id="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                        {errors.name && <span className="text-xs text-red-500">This Name field is required</span>}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                        </div>

                        <input {...register("email", { required: true })} type="email" id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                        {errors.email && <span className="text-xs text-red-500">This Email field is required</span>}
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                        </div>

                        <input {...register("password", { required: true })} type="password" id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                        {errors.password && <span className="text-xs text-red-500">This Password field is required</span>}
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm-password" className="block text-sm text-gray-800">Confirm Password</label>
                        </div>

                        <input {...register("Cpassword", { required: true })} type="password" id="confirm-password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-secColor focus:ring-pmColor focus:outline-none" />
                        {errors.Cpassword && <span className="text-xs text-red-500">This Confirm Password field is required</span>}
                    </div>
                    <span className="text-xs text-red-500">{error}</span>

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