import { useEffect, useState } from "react";

export default function About() {
  const images = ["WhatsApp Image 2026-04-26 at 12.10.18 AM.jpeg", "WhatsApp Image 2026-04-26 at 12.10.19 AM (1).jpeg", "WhatsApp Image 2026-04-25 at 5.56.51 PM.jpeg"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050505] text-white px-6 py-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase text-gray-400 bg-white/5">
            Our Story
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
            ഞങ്ങൾ ഒരു <span className="text-blue-400">ടീമാണ് സാറേ</span> ഒരു അടാർ  ടീം......
          </h2>
          
          {/* <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
            Merging deep technical expertise with bold aesthetic vision. We don't just build products; we craft digital experiences that resonate and endure.
          </p> */}

          {/* <div className="flex gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold">120+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-bold">15</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Awards</p>
            </div>
          </div> */}
        </div>

        {/* RIGHT SIDE: INTERACTIVE FLOATING STACK */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Background Decorative Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />

          <div className="relative w-full h-full">
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:z-50 group"
                style={{
                  width: "240px",
                  height: "320px",
                  // Dynamic positioning for a "scattered" look
                  top: i === 0 ? "5%" : i === 1 ? "25%" : "45%",
                  left: i === 0 ? "10%" : i === 1 ? "40%" : "20%",
                  transform: `rotate(${i === 0 ? -8 : i === 1 ? 6 : -4}deg)`,
                }}
              >
                <div className="w-full h-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0">
                  <img
                    src={`/${img}`}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                    alt={`Work ${i}`}
                  />
                  {/* Subtle inner glass effect */}
                  <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}