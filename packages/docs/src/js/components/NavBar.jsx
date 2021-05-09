import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const openGithub = (event) => {
        event && event.preventDefault && event.preventDefault();
        window.open('');
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="mx-4">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link
                            to="/components/alert"
                            className="flex-shrink-0 flex items-center cursor-pointer"
                        >
                            <h3 className="font-bold text-xl font-sans text-blue-700">
                                Star UI
                            </h3>
                        </Link>
                        {/* <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link
                                    to="/components/alert"
                                    className="text-blue-600 px-3 py-2 rounded-md text-sm font-semibold"
                                >
                                    Documentation
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                            onClick={() =>
                                window.open(
                                    'https://github.com/akashdsamantra/star-ui',
                                    '_blank'
                                )
                            }
                        >
                            <span className="sr-only">Github</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87 a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        to="/components/alert"
                        className="text-blue-600 px-3 py-2 rounded-md text-sm font-semibold"
                    >
                        Docs
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
