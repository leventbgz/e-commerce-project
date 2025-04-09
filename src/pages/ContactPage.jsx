import React, { useState } from "react";
import { Send, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "How long does it take to get a reply?",
        answer: "We usually reply within 24 hours during business days.",
    },
    {
        question: "Where are you located?",
        answer: "We are based in Dublin, Ireland but we ship worldwide.",
    },
    {
        question: "Can I return an item?",
        answer: "Yes, returns are accepted within 30 days of delivery.",
    },
];

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#F5F1EB] text-[#1E1E1E] min-h-screen py-10 px-4 md:px-10 lg:px-20 space-y-12">
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Have a question or need help? We're here for you. Reach out and we'll get back to you soon!
                </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto transition-all duration-500">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                {submitted && (
                    <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-6 shadow-md transition-all duration-300">
                        ✅ Your message has been sent! We’ll get back to you within 24 hours.
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#D0A85C]" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#D0A85C]" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea rows="4" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#D0A85C]"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#1E1E1E] text-[#F2D7A7] px-6 py-3 rounded-xl hover:bg-[#D0A85C] hover:text-black transition flex items-center gap-2 shadow-md"
                    >
                        <Send size={18} /> Send Message
                    </button>
                </form>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md transition-all p-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Help Center & CTA */}
            <div className="bg-[#FDFBF7] rounded-xl shadow-inner p-6 text-center space-y-4 max-w-4xl mx-auto">
                <p className="text-lg font-medium">Need more help?</p>
                <Link
                    to="/help"
                    className="inline-flex items-center gap-2 text-[#1E1E1E] font-semibold hover:text-[#D0A85C] transition"
                >
                    Visit our Help Center <ArrowRight />
                </Link>
                <p className="text-sm text-gray-500">You can also check our <a href="/guides" className="underline hover:text-[#D0A85C]">guides</a> for quick answers.</p>
            </div>
        </div>
    );
};

export default ContactPage;
