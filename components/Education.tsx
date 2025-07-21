"use"

import React from "react";
import { SiCoursera, SiKaggle, SiPostman } from "react-icons/si";
import { educationTimeline } from "@/lib/data";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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

            <VerticalTimeline lineColor="#0ea5e9">
                {educationTimeline.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={item.date}
                        iconStyle={{ background: "#0ea5e9", color: "#fff" }}
                        icon={<FaGraduationCap />}
                        contentStyle={{
                            background: "#1f2937",
                            color: "#e5e7eb",
                            boxShadow: "none",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
                    >
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm whitespace-pre-line">{item.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
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
