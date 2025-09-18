import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    User Info
                </h1>
                <p className="text-gray-700 text-lg">
                    User ID: <span className="text-blue-600 font-semibold">{userid}</span>
                </p>
            </div>
        </div>
    );
}

export default User;
