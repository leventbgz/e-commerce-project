import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-xl h-full">
            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-xl">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-xl" />
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-md text-gray-600 mt-2">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
