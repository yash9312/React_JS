import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-gray-900 rounded-lg sm:py-16 bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg">
                <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:justify-between px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
                    
                    {/* Text Content */}
                    <div className="max-w-xl space-y-6 text-center sm:text-left">
                        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                            Download Now
                            <span className="block text-4xl text-gray-700 font-medium mt-2">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex items-center px-6 py-3 font-semibold bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="mb-8 sm:mb-0 flex justify-center sm:justify-end w-full sm:w-1/2">
                        <img
                            className="w-80 sm:w-96 rounded-lg shadow-xl object-cover"
                            alt="Download illustration"
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                        />
                    </div>
                </div>
            </aside>

            {/* Illustration Section */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img
                    className="sm:w-96 w-56 rounded-lg shadow-lg"
                    alt="Webpage content illustration"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                />
            </div>

            {/* Title */}
            <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-900">
                Lorem Ipsum Yojo
            </h1>
        </div>
    )
}
