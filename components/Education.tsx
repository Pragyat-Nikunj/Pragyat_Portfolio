"use"

import React from "react";
import { SiCoursera, SiKaggle, SiPostman } from "react-icons/si";
import { educationTimeline } from "@/lib/data";
import { FaGraduationCap } from "react-icons/fa";
import { RainbowButton } from "@/components/magicui/rainbow-button";

import Head from "next/head";
export function Education() {
    const certifications = [
        {
            name: "Postman API Fundamentals",
            link: "https://badgr.com/public/assertions/aoe6USWTReOAow8h9n9NEQ",
            icon: <SiPostman size={50} />,
        },
        {
            name: "Intermediate Machine Learning",
            link: "https://www.kaggle.com/learn/certification/pragyatnikunj/intermediate-machine-learning",
            icon: <SiKaggle size={50} />,
        },
        {
            name: "Google Cybersecurity Professional Certificate",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/JJ7VIK5E2DCU",
            icon: <SiCoursera style={{ color: '#0056D2' }} size={50} />,
        },
        {
            name: "Machine Learning Specialization by DeepLearning.AI",
            link: "https://www.coursera.org/account/accomplishments/specialization/IBUQE6O1Q5Y3",
            icon: <SiCoursera style={{ color: '#0056D2' }} size={50} />,
        }
    ];
    return (
        <section className="p-6 md:p-12 max-w-4xl mx-auto text-gray-300 font-[Space Grotesk] overflow-x-hidden">
            <Head>
                <title>Education</title>
            </Head>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Education</h2>

            <div className="relative border-l-2 border-cyan-500 pl-6 space-y-12">
                {educationTimeline.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg">
                            <FaGraduationCap size={16} />
                        </div>
                        <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-cyan-500/20 transition">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-gray-300 mt-1 whitespace-pre-line">{item.description}</p>
                            <span className="block text-cyan-400 text-xs mt-2">{item.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-6 text-white">Certifications</h2>

            <div className="grid gap-6 md:grid-cols-2">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center justify-between shadow-lg transition-transform transform hover:scale-105"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="text-4xl">{cert.icon}</div>
                            <span className="text-white text-lg font-semibold">{cert.name}</span>
                        </div>
                        <RainbowButton
                            className="backdrop-blur-md hover:scale-106"
                            onClick={() => window.open(cert.link, "_blank")}
                        >
                            View
                        </RainbowButton>
                    </div>
                ))}
            </div>
        </section>
    );
}
