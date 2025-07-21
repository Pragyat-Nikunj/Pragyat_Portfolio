"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Code, GraduationCap, IdCard, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { Education } from "../../components/Education";
import {Contact} from "../../components/Contact"
import Head from "next/head";
export default function Home() {
  const [activeSection, setActiveSection] = useState("About");
  const section = [
    { id: "About", icon: <IdCard /> },
    { id: "Projects", icon: <Code /> },
    { id: "Education", icon: <GraduationCap /> },
    { id: "Contact", icon: <Send /> },
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row">
      <Head>
                <title>Portfolio</title>
            </Head>
      {/* Navbar */}
      <div className="flex flex-col md:justify-between md:items-start items-center w-full md:w-fit font-[Space Grotesk] px-6 py-4 md:py-8">
        {/* Section Links */}
        <div className="flex flex-row md:flex-col gap-4 mt-4 md:ml-6 md:mt-6 flex-wrap">
          {section.map((section) => (
            <span
              key={section.id}
              className={`text-gray-400 cursor-pointer duration-500 flex gap-2 hover:gap-3 hover:text-white ${activeSection === section.id ? "gap-3 text-white" : ""
                }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon} {section.id}
            </span>
          ))}
          <a
            href="/Resume-Pragyat_Nikunj.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-white border border-gray-600 hover:gap-3 hover:border-white px-4 py-2 rounded-full transition-all duration-500"
          >
            <MdOutlineFileDownload className="text-2xl group-hover:animate-bounce" />
            <span className="text-base font-medium">Resume</span>
          </a>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex flex-row gap-7 mt-6 ml-6">
          <a
            href="https://github.com/Pragyat-Nikunj"
            target="_blank"
            className="text-gray-400 hover:text-white duration-500 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/pragyatnikunj/"
            target="_blank"
            className="text-gray-600 hover:text-white duration-500 text-2xl"
          >
            <PiInstagramLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/pragyat-nikunj-399a95290/"
            target="_blank"
            className="text-gray-400 hover:text-white duration-500 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/pragyatnikunj"
            target="_blank"
            className="text-gray-400 hover:text-white duration-500 text-2xl"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="md:hidden flex justify-center gap-6 py-4">
        <a
          href="https://github.com/Pragyat-Nikunj"
          target="_blank"
          className="text-gray-400 hover:text-white duration-500 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/pragyatnikunj/"
          target="_blank"
          className="text-gray-600 hover:text-white duration-500 text-xl"
        >
          <PiInstagramLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/pragyat-nikunj-399a95290/"
          target="_blank"
          className="text-gray-400 hover:text-white duration-500 text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/pragyatnikunj"
          target="_blank"
          className="text-gray-400 hover:text-white duration-500 text-xl"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {activeSection === "About" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}

          {activeSection === "Projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          )}

          {activeSection === "Education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Education />
            </motion.div>
          )}

          {activeSection === "Contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </div>
  );
}
