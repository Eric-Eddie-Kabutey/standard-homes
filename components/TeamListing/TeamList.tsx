import React from 'react'
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const TeamList = () => {
    const members = [
        {
            name: 'Kebba Sanneh',
            position: 'CEO',
            image: '/ceo.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
        {
            name: 'Ramatoulie Fatty',
            position: 'Sales & Marketing Manager',
            image: '/sales-manager.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
        {
            name: 'Kadijatou Jallow',
            position: 'Marketer',
            image: '/marketer.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
        {
            name: 'Ismaila Sillah',
            position: 'Rent Manager',
            image: '/rent-manager.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
        {
            name: 'Absa Njie',
            position: 'Secretary',
            image: '/sect.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
        {
            name: 'Rohey John',
            position: 'Marketer',
            image: '/marketer-2.jpg',
            social: {
                linkedin: '#',
                facebook: '#',
                twitter: '#'
            }
        },
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <div key={index} className="flex cursor-pointer hover:shadow-lg flex-col items-center border shadow-md bg-[#F9FAFB] rounded-lg text-center px-6 py-8 transition-all duration-500 ease-in-out">
                        {/* Image */}
                        <div className="relative  w-40 h-40 mb-4">
                            <Image
                                src={member.image}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-xl text-slate-800 font-bold mb-2">{member.name}</h3>

                        {/* Position */}
                        <p className="text-gray-600 mb-4">{member.position}</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a
                                href={member.social.linkedin}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href={member.social.facebook}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href={member.social.twitter}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default TeamList