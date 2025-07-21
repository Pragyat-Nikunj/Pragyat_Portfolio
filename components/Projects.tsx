import React from "react";
import { projects } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { techStack } from "@/lib/techStack";
import Head from "next/head";
export function Projects() {
    return (

        <section className="p-6 md:p-12 max-w-4xl mx-auto text-gray-300 font-[Space Grotesk] overflow-x-hidden">
            <Head>
                <title>Projects</title>
            </Head>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="bg-[#1c000a] p-6 rounded-2xl shadow-lg border border-gray-700 hover:bg-[#24000a] hover:scale-105 duration-300 transition"
                    >
                        {proj.image && (
                            <img
                                src={proj.image}
                                alt={`${proj.name} preview`}
                                className="rounded-xl mb-4 w-full object-cover h-40 transition-transform duration-300 hover:scale-[1.03]"
                            />
                        )}
                        <h3 className="text-xl font-semibold text-white mb-2">{proj.name}</h3>
                        <p className="text-gray-400 mb-4">{proj.description}</p>
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            {proj.tech.map((Icon, idx) => (
                                <span key={idx} className="text-2xl text-red-400">
                                    {Icon}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-6 flex-wrap">
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-400 hover:underline text-sm flex gap-2 items-center"
                            >
                                <FaGithub /> GitHub Repo
                            </a>
                            {proj.live && (
                                <a
                                    href={proj.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline text-sm"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl mt-6 font-bold mb-6 text-center text-red-400">My Tech Stack</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] rounded-lg p-4 shadow-md transition transform hover:scale-105"
                    >
                        <div className="text-4xl">{tech.icon}</div>
                        <p className="text-sm text-white font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
