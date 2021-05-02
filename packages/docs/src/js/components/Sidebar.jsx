import React from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import { documentations } from '../constants/documentation.constant';

const Sidebar = (props) => {
    const { history } = props;
    const location = useLocation();

    return (
        <ul className="h-screen overflow-scroll">
            {documentations.map((documentation) => (
                <li className="p-2 my-1 mx-auto" key={documentation.name}>
                    <span className="uppercase  text-sm font-bold">
                        {documentation.name}
                    </span>

                    <ul className="mt-2">
                        {documentation.components.map((component) => (
                            <li
                                className={`p-1 m-1 text-base cursor-pointer ${
                                    location.pathname ===
                                    `/components${component.route}`
                                        ? 'text-blue-600'
                                        : ''
                                }`}
                                key={component.route}
                                onClick={() =>
                                    history.push(
                                        `/components${component.route}`
                                    )
                                }
                            >
                                {component.name}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default withRouter(Sidebar);
