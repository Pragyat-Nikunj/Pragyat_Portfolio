import React from "react";
import Image from "next/image";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

export function About() {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto text-gray-300 font-[Space Grotesk]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>

      {/* Profile Image with Gradient Glow */}
      <div className="mb-10 flex justify-center">
        <div className="p-[2px] rounded-full bg-gradient-to-br from-[#1a0000] via-[#330000] to-[#660000] shadow-[0_0_8px_2px_rgba(255,77,77,0.15)]">
          <Image
            src="/profile.jpg"
            alt="Pragyat Nikunj"
            width={160}
            height={160}
            priority
            className="rounded-full object-cover border-2 border-[#ff4d4d]/50 shadow-[0_0_6px_1px_rgba(255,77,77,0.2)]"
          />
        </div>

      </div>

      <p className="mb-4 leading-relaxed">
        Hey, I’m <span className="text-red-500 font-semibold">Pragyat Nikunj</span> — a developer who doesn’t just build things that look good or function well, but strives to create experiences that feel intuitive, thoughtful, and complete.
      </p>
      <p className="mb-4 leading-relaxed">
        I enjoy turning ideas into interactive products — from frontend design to backend logic. Whether I’m working on a full-stack app, a personal project, or contributing to something bigger, I care about the details that elevate the user’s journey.
      </p>
      <p className="leading-relaxed">
        For me, good software isn’t just about features — it’s about flow, feedback, and how the user connects with it. That’s what drives me to keep learning and building.
      </p>

      <div className="flex justify-center gap-6 mt-6 text-3xl bg-[#2b0c0c]/70 p-4 rounded-xl shadow-[0_0_16px_2px_rgba(255,77,77,0.2)] border border-[#ff4d4d]/30 backdrop-blur-sm">
        <a
          href="https://leetcode.com/u/pragyatnikunj/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_#ffa116]"
        >
          <Image src="/icons/leetcode.svg" alt="LeetCode" width={32} height={32} />
        </a>

        <a
          href="https://www.geeksforgeeks.org/user/pragyatv4j1/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_#2f8d46]"
        >
          <Image src="/icons/gfg.svg" alt="GFG" width={32} height={32} />
        </a>

        <a
          href="https://www.hackerrank.com/profile/pragyatnikunj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 duration-300 transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_#00ea64]"
        >
          <FaHackerrank />
        </a>

        <a
          href="https://www.codechef.com/users/pragyatnikunj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5B4638] duration-300 transition transform hover:scale-115 hover:drop-shadow-[0_0_8px_#e0c7a8]"
        >
          <SiCodechef />
        </a>
      </div>

    </section>
  );
}
