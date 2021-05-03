import React from 'react';

const Table = ({ tableRows = [] }) => {
    return (
        <table className="table-fixed w-full text-left">
            <thead>
                <tr className="border-gray-300 border-b py-2">
                    <th className="w-1/4 py-2">Name</th>
                    <th className="w-1/2 py-2">Type</th>
                    <th className="w-1/4 py-2">Default</th>
                </tr>
            </thead>
            <tbody>
                {tableRows.map((row) => (
                    <tr className="border-gray-300 border-b py-2">
                        <td className="py-2">{row.name}</td>
                        <td className="py-2">{row.type}</td>
                        <td className="py-2">{row.default}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
