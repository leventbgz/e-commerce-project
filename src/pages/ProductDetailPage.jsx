import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";

const ProductDetailPage = () => {
    const { productId } = useParams();

    // Normally, data would be fetched or the products would be filtered based on the ID.
    // For now, we can assume we have the products data available.
    const products = [
        { id: 1, name: "Product 1", price: 29.99, image: "path/to/image1.jpg", description: "Description of the Product" },
        { id: 2, name: "Product 2", price: 39.99, image: "path/to/image2.jpg", description: "Description of the Product" },
        { id: 3, name: "Product 3", price: 49.99, image: "path/to/image3.jpg", description: "Description of the Product" },
        { id: 4, name: "Product 4", price: 59.99, image: "path/to/image4.jpg", description: "Description of the Product" },
    ];

    //Find the product that matches the productId from the URL
    const product = products.find((prod) => prod.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Back to Shop Link */}
            <div className="mt-6 text-center">
                <Link to="/shop" className="text-[#1E1E1E] hover:text-[#F2D7A7] flex items-center justify-center gap-2">
                    <ArrowLeft size={20} /> Back to Shop
                </Link>
            </div>

            {/* Product Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Product Image */}
                <div className="flex justify-center items-center">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-xl shadow-lg" />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-semibold text-[#1E1E1E]">{product.name}</h1>
                    <p className="text-lg text-gray-600 mt-4">${product.price}</p>
                    <p className="text-md text-gray-500 mt-4">{product.description}</p>

                    {/* Add to Cart and Favorite Actions */}
                    <div className="flex mt-6 gap-6">
                        <Link to="/cart" className="py-2 px-4 rounded flex flex-col items-center hover:text-white transition">
                            <ShoppingCart />
                        </Link>
                        <Link to="/favorites" className="py-2 px-4 rounded flex flex-col items-center hover:text-white transition">
                            <Heart />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
