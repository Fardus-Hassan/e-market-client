import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className="mx-auto max-w-[1440px] w-[95%]">
            <div className="py-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div className='flex'>
                               <Logo></Logo>
                            </div>

                            <p className="max-w-sm mt-2 text-gray-500">
                                Join 31,000+ others and never miss out on new tips, tutorials, and
                                more.
                            </p>

                            <div className="flex mt-6 -mx-2">
                                <a
                                    href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    aria-label="Reddit"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.901 14.892H13.563V21.881C18.4226 21.1101 21.9999 16.9214 22.001 12.002C22.001 6.47705 17.524 2.00005 12 2.00005C6.47595 2.00005 2.00095 6.47705 2.00195 12.002Z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    aria-label="Github"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.026 2C7.13295 1.99937 2.9617 5.54799 2.17841 10.3776C1.39513 15.2072 4.2302 19.893 8.87395 21.439C9.37395 21.529 9.55295 21.222 9.55295 20.958V19.582C6.72895 20.208 6.43795 18.337 6.43795 18.337C6.15837 17.49 5.62672 17.2008 5.62672 17.2008C4.86895 16.6508 5.68295 16.661 5.68295 16.661C6.51508 16.7242 7.00273 17.4991 7.24895 17.795C7.92559 18.7226 8.97235 18.434 9.41995 18.241C9.51078 17.7501 9.73827 17.2976 10.085 16.939C7.99095 16.691 5.79095 15.864 5.79095 12.633C5.78008 11.7703 6.10302 10.939 6.68295 10.311C6.53973 9.93244 6.49681 9.52518 6.55795 9.126C6.86412 9.02327 7.18312 8.97699 7.50195 8.98805C8.4357 9.04161 9.35119 9.32752 10.144 9.82305C11.7802 9.40424 13.5487 9.40424 15.185 9.82305C15.9778 9.32752 16.8933 9.04161 17.827 8.98805C18.1458 8.97699 18.4648 9.02327 18.771 9.126C18.8321 9.52518 18.7892 9.93244 18.646 10.311C19.2291 10.9369 19.5548 11.7694 19.537 12.633C19.537 15.873 17.331 16.693 15.228 16.935C15.6917 17.4344 15.9347 18.1045 15.888 18.787V20.958C15.888 21.275 16.066 21.588 16.576 21.439C21.2254 19.8915 24.054 15.2013 23.268 10.3688C22.482 5.53628 18.313 1.9996 13.426 2H12.026Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase">About</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Company
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Community
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Careers
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase">Blog</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Recent Posts
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Popular Posts
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Tutorials
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase">Products</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Features
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Pricing
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                    Customers
                                </a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-600 hover:underline">
                                    +1 (555) 123-4567
                                </span>
                                <span className="block mt-2 text-sm text-gray-600 hover:underline">
                                    info@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-300 border-none" />

                <div>
                    <p className="text-center text-gray-600">
                        © E-Market UI 2024 - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
