import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
    const { history } = props;

    const openDocumentation = (event) => {
        event && event.preventDefault && event.preventDefault();
        history.push('/components');
    };

    return (
        <div className="p-3 flex justify-center">
            <button
                className="p-2 rounded-md bg-blue-600 text-white"
                onClick={openDocumentation}
            >
                Documentation
            </button>
        </div>
    );
};

export default withRouter(Home);
