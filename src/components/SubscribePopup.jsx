import React, { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

const SubscribePopup = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Add your subscription logic here
            console.log('Subscribed:', email);
            setIsSubmitted(true);

            // Close popup after 2 seconds
            setTimeout(() => {
                onClose();
                setIsSubmitted(false);
                setEmail('');
            }, 2000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Popup */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                    aria-label="Close popup"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                {/* Content */}
                {!isSubmitted ? (
                    <div className="p-8">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="text-white" size={28} />
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
                            Stay Updated!
                        </h2>
                        <p className="text-gray-600 text-center mb-6">
                            Subscribe to our newsletter and get the latest business insights delivered to your inbox weekly.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Subscribe Now
                            </button>
                        </form>

                        {/* Privacy Note */}
                        <p className="text-xs text-gray-500 text-center mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                ) : (
                    <div className="p-8 text-center">
                        {/* Success Icon */}
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-600" size={32} />
                        </div>

                        {/* Success Message */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Thank You!
                        </h2>
                        <p className="text-gray-600">
                            You've successfully subscribed to our newsletter.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubscribePopup;