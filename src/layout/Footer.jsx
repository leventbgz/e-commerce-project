import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] text-[#E4C590] py-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold text-white">Pucci&Puppi</h2>
                    <p className="text-sm mt-1">© 2025 Pucci&Puppi. All rights reserved.</p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-white transition">
                        <Facebook size={20} className="sm:text-xl md:text-2xl" />
                    </Link>
                    <Link to="#" className="hover:text-white transition">
                        <Instagram size={20} className="sm:text-xl md:text-2xl" />
                    </Link>
                    <Link to="#" className="hover:text-white transition">
                        <Twitter size={20} className="sm:text-xl md:text-2xl" />
                    </Link>
                    <Link to="#" className="hover:text-white transition">
                        <Github size={20} className="sm:text-xl md:text-2xl" />
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center mt-4 md:mt-0 md:items-end">
                    <Link to="/about" className="text-sm hover:text-[#F2D7A7] transition">
                        About Us
                    </Link>
                    <Link to="/team" className="text-sm hover:text-[#F2D7A7] transition mt-2">
                        Our Team
                    </Link>
                    <Link to="/contact" className="text-sm hover:text-[#F2D7A7] transition mt-2">
                        Contact
                    </Link>
                    <Link to="/policy" className="text-sm hover:text-[#F2D7A7] transition mt-2">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;