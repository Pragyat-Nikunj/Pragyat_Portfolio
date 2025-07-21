// components/CursorLight.tsx
"use client";

import { useEffect, useState } from "react";

export default function CursorLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-32 w-32 rounded-full bg-white opacity-10 blur-2xl mix-blend-screen transition-transform duration-100"
      style={{
        left: position.x - 64, // offset half width
        top: position.y - 64,
      }}
    />
  );
}
