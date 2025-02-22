import React from 'react';
import Banner from "../assets/banner.jpg";
import Circle from "../assets/glass_circle.png";

const ClinicalTrail = () => {
    return (
        <div className="bg-blue-50 flex flex-col items-center py-10 px-4 sm:px-10 md:px-20">
            {/* Banner Section */}
            <header className="text-center mb-10">
                <img src={Banner} alt="ProGsterol Banner" className="w-full max-w-5xl mx-auto" />
            </header>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-5xl">
                {/* Content Section */}
                <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0 md:mt-6 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-[#09346b] mb-4">
                        ProGsterol - Reverse Insulin Resistance
                    </h2>
                    <p className="text-black mb-6">
                        ProGsterol's main ingredient Deglusterol is the world's first new dietary Ingredient (NDI) as a synthetic peptide approved by U.S FDA. It increases the sensitivity of insulin receptors and affects cells with insulin resistance.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center lg:w-1/2 text-center gap-4">
                    <img src={Circle} alt="Progsterol Product" className="w-40 sm:w-48 lg:w-64" />
                    <h2 className="text-lg sm:text-xl font-semibold text-blue-800">
                        Just 1 stick a day!
                    </h2>
                    <p className="text-sm sm:text-base text-black">
                        For Healthy Glucose Level with ProGsterol
                    </p>
                </div>
            </div>

            {/* PDF Display Section */}
            <div className="w-full max-w-5xl mt-10">
                <h2 className="text-xl font-semibold text-center text-[#09346b] mb-4">
                    Clinical Trial PDF
                </h2>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <embed
                        src="/Progsterol.pdf"
                        type="application/pdf"
                        width="100%"
                        height="600px"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ClinicalTrail;
