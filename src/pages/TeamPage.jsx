import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        name: "Emre Şahiner",
        role: "Project Manager",
        image: "../public/images/ProjectManagerImage.jpg",
        linkedin: "https://www.linkedin.com/in/emresahiner/",
    },
    {
        name: "Levent Bogaz",
        role: "Developer/Owner",
        image: "../public/images/LeventBogaz.jpg",
        linkedin: "https://www.linkedin.com/in/leventBogaz",
    },
    {
        name: "Giulia Spreafico",
        role: "Fashion Designer/Owner",
        image: "/../public/images/Giulia.jpg",
        linkedin: "https://www.linkedin.com/in/giuliaSpreafico/",
    },
];

const TeamPage = () => {
    return (
        <div className="bg-[#1E1E1E] min-h-screen text-[#F2D7A7] px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-4 tracking-wide">Meet Our Team</h1>
            <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
                We’re passionate developers and creators working together to build your dream designs.
            </p>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="bg-[#2D2D2D] p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 object-cover rounded-full border-4 border-[#E4C590] shadow-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-sm text-gray-400">{member.role}</p>
                        <Link
                            to={member.linkedin}
                            target="_blank"
                            className="mt-4 inline-flex items-center gap-2 text-[#E4C590] hover:text-white transition"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
