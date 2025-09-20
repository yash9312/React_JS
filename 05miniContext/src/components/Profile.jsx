import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center p-33 bg-gray-100">
        <p className="text-gray-600 text-lg">Please log in</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-20 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Profile
        </h2>
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          {/* If you want password back: <p>Password: {user.password}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
