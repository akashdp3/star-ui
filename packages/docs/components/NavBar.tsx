import React from 'react';
import { FaDev, FaGithub, FaTwitter, FaMoon, FaSun } from 'react-icons/fa';

import Icon from './Icon';

interface INavBarProps {
    theme: 'light' | 'dark';
    toggleTheme: Function;
}

type Social = {
    name: string;
    link: string;
};

const SOCIAL_LINKS = {
    github: {
        name: 'Github',
        link: 'https://github.com/akashdsamantra'
    },
    twitter: {
        name: 'Twitter',
        link: 'https://twitter.com/akashdsamantra'
    },
    dev: {
        name: 'Dev.to',
        link: 'https://dev.to/akashdsamantra'
    }
};

const NavBar = (props: INavBarProps) => {
    const { theme, toggleTheme } = props;

    const openSocialLink = (social: Social) => () => {
        window.open(social.link, '_blank');
    };

    return (
        <div className="border-solid">
            <nav className="flex items-center p-4 justify-between bg-white">
                <h1>Heading</h1>
                <div className="grid grid-cols-4 gap-4">
                    <Icon
                        icon={FaGithub}
                        onClick={openSocialLink(SOCIAL_LINKS.github)}
                    />
                    <Icon
                        icon={FaTwitter}
                        onClick={openSocialLink(SOCIAL_LINKS.twitter)}
                    />
                    <Icon
                        icon={FaDev}
                        onClick={openSocialLink(SOCIAL_LINKS.dev)}
                    />
                    <Icon
                        icon={theme === 'light' ? FaSun : FaMoon}
                        onClick={toggleTheme}
                    />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
