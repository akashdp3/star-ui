import React from 'react';
import { Link } from 'react-router-dom';

const SunIcon = (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        height="1.4em"
        width="1.4em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
    </svg>
);
const MoonIcon = (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        height="1.4em"
        width="1.4em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
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
                                {theme === 'light' ? MoonIcon : SunIcon}
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
