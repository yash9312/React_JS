import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-center">
                    
                    {/* Image */}
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                            alt="React development"
                            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
