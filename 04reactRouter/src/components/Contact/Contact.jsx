import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[700px] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Contact Info */}
                <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col justify-start">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Get in touch
                    </h1>
                    <p className="mt-4 text-gray-700 text-lg sm:text-xl font-medium">
                        Fill in the form to start a conversation
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center text-gray-700">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="ml-4 font-semibold w-40">Acme Inc, Street, State, Postal Code</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="ml-4 font-semibold w-40">+44 1234567890</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-4 font-semibold w-40">info@acme.org</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="p-8 bg-white rounded-xl shadow-lg flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                    />
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone Number"
                        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                    />
                    <button
                        type="submit"
                        className="w-32 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-2"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}
