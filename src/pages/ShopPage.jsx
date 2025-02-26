import React from 'react';

import ProductCard from "../components/ProductCard";

const ShopPage = () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99, image: "path/to/image1.jpg" },
        { id: 2, name: "Product 2", price: 39.99, image: "path/to/image2.jpg" },
        { id: 3, name: "Product 3", price: 49.99, image: "path/to/image3.jpg" },
    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ShopPage;
