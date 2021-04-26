import React from 'react';
import { withRouter } from 'react-router-dom';

import { documentations } from '../constants/documentation.constant';

const Sidebar = (props) => {
    const { history } = props;

    return (
        <ul className="h-screen overflow-scroll border-r-2 border-grey-300">
            {documentations.map((documentation) => (
                <li
                    className="p-2 my-1 mx-auto cursor-pointer"
                    key={documentation.route}
                    onClick={() =>
                        history.push(`/components${documentation.route}`)
                    }
                >
                    {documentation.name}
                </li>
            ))}
        </ul>
    );
};

export default withRouter(Sidebar);
