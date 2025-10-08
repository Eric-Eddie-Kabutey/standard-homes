"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';

interface ContactSectionProps {
  sectionTitle: string;
  headline: string;
  description: string;
  contactImage: string;
  companyName: string;
  phoneNumbers: string[];
  email: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sectionTitle,
  headline,
  description,
  contactImage,
  companyName,
  phoneNumbers,
  email,
  socialLinks,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [emailAddress, setEmailAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Basic validation
    if (!fullName || !emailAddress || !phoneNumber) {
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
        setSubmitMessage("Please enter a valid phone number.");
        setIsSubmitting(false);
        return;
    }
    if (!emailAddress.includes('@') || !emailAddress.includes('.')) {
        setSubmitMessage("Please enter a valid email address.");
        setIsSubmitting(false);
        return;
    }

    // --- Placeholder for actual form submission logic ---
    console.log({ fullName, phoneNumber, emailAddress });
    // In a real application, you would send this data to an API endpoint
    try {
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ fullName, phoneNumber, emailAddress }) });
      // Example: if (response.ok) { setSubmitMessage("Message sent successfully!"); setFullName(''); setPhoneNumber(''); setEmailAddress(''); }
      // Example: else { setSubmitMessage("Failed to send message. Please try again."); }
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitMessage("Thank you for your inquiry! We'll be in touch shortly.");
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        <div className="text-center md:text-left mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider relative inline-block before:absolute before:content-[''] before:w-8 before:h-px before:bg-gray-400 before:left-[0rem] before:top-1/2 before:-translate-y-1/2 before:transform pl-[40px]">
            {sectionTitle}
          </p>
          <h2 className="mt-2 text-4xl font-serif font-bold text-amber-800 sm:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Image and Company Info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src={contactImage} alt="Couple looking at property" layout="fill" objectFit="cover" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{companyName}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    {phoneNumbers.map((num, index) => (
                      <a key={index} href={`tel:${num}`} className="block hover:underline">{num}</a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                  <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                {socialLinks.facebook && (
                  <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" passHref>
                    <div  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {socialIcons.facebook}
                    </div>
                  </Link>
                )}
                {socialLinks.twitter && (
                  <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" passHref>
                    <div  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {socialIcons.twitter}
                    </div>
                  </Link>
                )}
                {socialLinks.instagram && (
                  <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" passHref>
                    <div  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {socialIcons.instagram}
                    </div>
                  </Link>
                )}
                {socialLinks.linkedin && (
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"  passHref>
                    <div className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {socialIcons.linkedin}
                    </div>
                  </Link>
                )}
                {socialLinks.youtube && (
                  <Link href={socialLinks.youtube} passHref target="_blank" rel="noopener noreferrer">
                    <div  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      {socialIcons.youtube}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name*"
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="GM" // Default to The Gambia
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Phone Number*"
                  className="contact-input-phone" // Use this class to target the wrapper
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="sr-only">E-mail</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="E-mail*"
                  required
                  className="contact-input"
                />
              </div>
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-700 to-amber-800 rounded-md shadow-lg hover:from-yellow-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;