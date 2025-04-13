import React from "react";

const AboutUsPage = () => {
    const sections = [
        {
            title: "Our Story",
            text: "Founded with a vision to redefine modern elegance, we create clothing that balances heritage tailoring with contemporary aesthetics.",
            altText: "Our collections are a tribute to sophistication — designed in Dublin, inspired by the timeless elegance of European fashion capitals."
        },
        {
            title: "Our Vision",
            text: "We believe true luxury lies in timeless design, impeccable craftsmanship, and a seamless blend of comfort and sophistication.",
            altText: "Our mission is to empower both men and women with clothing that feels as exquisite as it looks — effortless, enduring, and distinguished."
        },
        {
            title: "Craftsmanship & Materials",
            text: "Every garment begins with the finest materials: natural fabrics sourced from trusted European mills, and thoughtful construction techniques that reflect our commitment to durability and elegance.",
            altText: "From the first sketch to the final stitch, our process is rooted in tradition and elevated by innovation."
        },
        {
            title: "Ethical Values",
            text: "Conscious choices are at the heart of what we do. We partner with ethical manufacturers, reduce waste in production, and focus on longevity over trends.",
            altText: "For us, sustainability isn’t just a commitment — it’s a responsibility."
        },
    ];

    return (
        <div className="bg-[#F5F1EB] text-[#1E1E1E] min-h-screen py-10 px-4 md:px-10 lg:px-20 space-y-12">
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">About Us</h1>
                <div className="w-48 h-1 bg-[#D0A85C] mx-auto mb-6 rounded-full"></div>
                <p className="italic text-gray-600 text-lg max-w-2xl mx-auto">
                    Elegance in every stitch. Discover our philosophy, our craftsmanship, and what defines our essence.
                </p>
            </div>

            {/* Lifestyle Image */}
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="../public/images/aboutUs.jpg"
                    alt="Lifestyle"
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Section Cards */}
            <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-xl p-6 transform transition-transform duration-300 hover:scale-105"
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-center">{section.title}</h2>
                        <br />
                        <p className="text-gray-600 text-center">{section.text}</p>
                        <br />
                        <p className="text-gray-500 italic text-center">{section.altText}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsPage;
