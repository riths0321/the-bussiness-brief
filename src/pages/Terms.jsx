import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const Terms = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            content: `By accessing and using BusinessBrief ("the Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these Terms of Service, please do not use this Website.

We reserve the right to modify these terms at any time. Your continued use of the Website following any changes constitutes acceptance of those changes.`
        },
        {
            id: 'use-license',
            title: '2. Use License',
            content: `Permission is granted to temporarily download one copy of the materials on BusinessBrief's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose
• Attempt to decompile or reverse engineer any software
• Remove any copyright or proprietary notations
• Transfer the materials to another person

This license shall automatically terminate if you violate any of these restrictions.`
        },
        {
            id: 'user-accounts',
            title: '3. User Accounts and Registration',
            content: `To access certain features, you may be required to create an account. You agree to:

• Provide accurate and complete information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorized access
• Accept responsibility for all activities under your account

We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`
        },
        {
            id: 'content',
            title: '4. Content and Intellectual Property',
            content: `All content on BusinessBrief, including text, graphics, logos, images, and software, is the property of BusinessBrief or its content suppliers and is protected by copyright and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission. For content licensing inquiries, contact rights@businessbrief.com.`
        },
        {
            id: 'user-content',
            title: '5. User-Generated Content',
            content: `Users may post comments, feedback, and other content ("User Content") on our Website. By posting User Content, you grant BusinessBrief a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display such content.

You represent that:
• You own or have rights to the User Content
• The content does not violate any third-party rights
• The content complies with these Terms

We reserve the right to remove any User Content that violates these terms or is deemed inappropriate.`
        },
        {
            id: 'prohibited-uses',
            title: '6. Prohibited Uses',
            content: `You may not use our Website for any unlawful purpose or to:

• Harass, abuse, or harm another person
• Impersonate any person or entity
• Upload viruses or malicious code
• Spam or send unsolicited communications
• Interfere with the proper functioning of the Website
• Collect user information without consent
• Engage in any automated use of the system
• Frame or link to the Website without permission

Violation of these prohibitions may result in termination of access and legal action.`
        },
        {
            id: 'subscriptions',
            title: '7. Subscriptions and Payments',
            content: `Certain services require a paid subscription. By purchasing a subscription, you agree to:

• Provide accurate billing information
• Pay all applicable fees and taxes
• Automatic renewal unless cancelled
• Our refund policy as stated separately

We reserve the right to change subscription fees with 30 days' notice. Cancellations can be made through your account settings.`
        },
        {
            id: 'disclaimers',
            title: '8. Disclaimers and Limitations',
            content: `The materials on BusinessBrief's website are provided on an 'as is' basis. BusinessBrief makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.

BusinessBrief does not warrant that:
• The Website will be uninterrupted or error-free
• Defects will be corrected
• The Website is free of viruses or harmful components
• The results of using the Website will meet your requirements

The information provided is for general informational purposes and should not be considered professional advice.`
        },
        {
            id: 'liability',
            title: '9. Limitation of Liability',
            content: `In no event shall BusinessBrief or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BusinessBrief's website.

Our total liability to you for any claims arising from your use of the Website shall not exceed the amount you paid to us, if any, during the twelve months preceding the claim.`
        },
        {
            id: 'indemnification',
            title: '10. Indemnification',
            content: `You agree to indemnify, defend, and hold harmless BusinessBrief and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:

• Your use of the Website
• Your violation of these Terms
• Your violation of any third-party rights
• Any User Content you post`
        },
        {
            id: 'third-party',
            title: '11. Third-Party Links',
            content: `Our Website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party sites. You acknowledge and agree that BusinessBrief shall not be liable for any damage or loss caused by your use of any third-party website.`
        },
        {
            id: 'termination',
            title: '12. Termination',
            content: `We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Website will immediately cease.

All provisions that should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`
        },
        {
            id: 'governing-law',
            title: '13. Governing Law',
            content: `These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.

Any disputes arising from these Terms or your use of the Website shall be resolved in the courts located in New York, NY.`
        },
        {
            id: 'contact',
            title: '14. Contact Information',
            content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@businessbrief.com
Phone: +1 (555) 123-4567
Address: 123 Business Street, New York, NY 10001`
        }
    ];

    const highlights = [
        {
            icon: FileText,
            title: 'Clear Guidelines',
            description: 'Transparent rules for using our platform'
        },
        {
            icon: CheckCircle,
            title: 'User Rights',
            description: 'Your rights and responsibilities defined'
        },
        {
            icon: AlertCircle,
            title: 'Fair Usage',
            description: 'Guidelines to ensure a safe community'
        },
        {
            icon: XCircle,
            title: 'Prohibited Actions',
            description: 'Clear boundaries for acceptable use'
        }
    ];

    return (
        <>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                    <div className="container-page">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Terms of Service
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-4">
                                These terms govern your use of BusinessBrief. Please read them carefully
                                before using our services.
                            </p>
                            <p className="text-sm text-gray-400">
                                Last Updated: December 30, 2025
                            </p>
                        </div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                                        <item.icon className="text-primary" size={24} />
                                    </div>
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-16">
                    <div className="container-page">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Important:</strong> By using BusinessBrief, you agree to these terms.
                                        If you do not agree, please do not use our services.
                                    </p>
                                </div>

                                {sections.map((section, index) => (
                                    <div key={section.id} className={index > 0 ? 'mt-12' : ''}>
                                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Links */}
                            <div className="mt-12 bg-gray-50 rounded-lg p-8">
                                <h3 className="font-bold text-lg mb-4">Quick Navigation</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="text-primary hover:underline text-sm"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-primary text-white">
                    <div className="container-page text-center">
                        <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                        <p className="text-xl mb-8 text-white/90">
                            Our team is here to help clarify any concerns you may have.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Terms;