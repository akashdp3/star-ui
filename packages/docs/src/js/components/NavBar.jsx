import React from 'react';
import { Link } from 'react-router-dom';

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
                            className="p-1 mr-2 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                            title="Github"
                            onClick={() =>
                                window.open(
                                    'https://star-ui-storybook.vercel.app',
                                    '_blank'
                                )
                            }
                        >
                            <span className="">Storybook</span>
                        </button>
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
                            title="Github"
                            onClick={handleChangeTheme}
                        >
                            <span className="capitalize">{theme}</span>
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
