import React from 'react';

const ProductCard = ({product}) => {

    const {name, price, brand, category, image} = product;

    return (
        <div className="flex flex-col items-center justify-center w-full  mx-auto">
            <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
                    {name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
                    <span className="font-bold text-gray-800">${price}</span>
                    <span className="font-bold text-secColor">#{brand}</span>
                    <span className="px-2 py-1 text-xs text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                        {category}
                    </span>
                </div>
            </div>
        </div>


    );
};

export default ProductCard;