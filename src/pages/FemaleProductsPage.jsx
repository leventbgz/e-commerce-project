import React from "react";
import ProductCard from "../components/ProductCard";

const FemaleProductsPage = () => {
    const products = [
        { id: 1, name: "Product A", price: 29.99, image: "path/to/imageA.jpg" },
        { id: 2, name: "Product B", price: 39.99, image: "path/to/imageB.jpg" },
        { id: 3, name: "Product C", price: 49.99, image: "path/to/imageC.jpg" },
        { id: 4, name: "Product D", price: 59.99, image: "path/to/imageD.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default FemaleProductsPage;
