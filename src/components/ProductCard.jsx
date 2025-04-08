import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from 'lucide-react';


const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-xl h-full">
            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-xl">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-xl" />
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-md text-gray-600 mt-2">${product.price}</p>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around w-full mt-6 bg-[#1E1E1E] text-[#E4C590]">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#1E1E1E] text-[#E4C590] rounded-xl hover:bg-[#F2D7A7] transition">
                    <ShoppingCart size={18} /> Add to Cart
                </button>
                <button className="flex items-center gap-2 py-2 px-4 bg-[#1E1E1E] text-[#E4C590] rounded-xl hover:bg-[#F2D7A7] transition">
                    <Heart size={18} /> Add to Favorites
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
