import React from 'react';
import { Link } from 'react-router-dom';

const Light = (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-4ym8mv"
    >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);
const Dark = (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-4ym8mv"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

const NavBar = (props) => {
    const { theme, handleChangeTheme } = props;

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
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
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            className="p-1 mr-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                            title="Github"
                            onClick={() =>
                                window.open(
                                    'https://github.com/akashdsamantra/star-ui',
                                    '_blank'
                                )
                            }
                        >
                            <span className="">Github</span>
                        </button>
                        <button
                            className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                            title="Theme"
                            onClick={handleChangeTheme}
                        >
                            <span className="capitalize">
                                {theme === 'light' ? Dark : Light}
                            </span>
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
