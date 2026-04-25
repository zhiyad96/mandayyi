// // import { useState, useRef } from "react";

// // export default function InfiniteCarousel() {
// //   // Array of 10-20 images
// //   const images = [
// //   "/images/img1.jpg",
// //   "/images/img2.jpg",
// //   "/images/img3.jpg",
// //   "/images/img4.jpg",
// //   "/images/img5.jpg",
// //   "/images/img6.jpg",
// //   "/images/img7.jpg",
// //   "/images/img8.jpg",
// //   "/images/img9.jpg",
// //   "/images/img10.jpg",
// //   "/images/img11.jpg",
// //   "/images/img12.jpg",
// //   "/images/img13.jpg",
// //   "/images/img14.jpg",
// //   "/images/img15.jpg",
// //   "/images/img16.jpg",
// //   "/images/img17.jpg",
// //   "/images/img18.jpg",
// //   "/images/img19.jpg",
// //   "/images/img20.jpg",
// // ];
  
// //   const [index, setIndex] = useState(0);
// //   const lastMove = useRef(0);

// //   const handleMouseMove = (e) => {
// //     const now = Date.now();
// //     if (now - lastMove.current < 300) return; // Faster response for more images

// //     const { left, width } = e.currentTarget.getBoundingClientRect();
// //     const x = e.clientX - left;

// //     if (x < width / 2) {
// //       setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //     } else {
// //       setIndex((prev) => (prev + 1) % images.length);
// //     }
// //     lastMove.current = now;
// //   };

// //   return (
// //     <section className="h-screen flex items-center justify-center bg-[#f0f0f5] overflow-hidden">
// //       <div
// //         className="relative w-full h-[600px] flex items-center justify-center"
// //         onMouseMove={handleMouseMove}
// //         style={{ perspective: "1200px" }}
// //       >
// //         {images.map((img, i) => {
// //           // Calculate the relative distance from the active index
// //           let offset = i - index;
          
// //           // Handle wrapping for infinite loop behavior
// //           if (offset > images.length / 2) offset -= images.length;
// //           if (offset < -images.length / 2) offset += images.length;

// //           const isActive = offset === 0;
// //           const isAbsVisible = Math.abs(offset) <= 2; // Only animate 2 images to each side

// //           // Dynamic Styles based on distance from center
// //           const style = {
// //             transform: `
// //               translateX(${offset * 350}px) 
// //               scale(${isActive ? 1 : 0.8}) 
// //               rotateY(${offset * -20}deg)
// //               translateZ(${isActive ? 100 : 0}px)
// //             `,
// //             zIndex: 10 - Math.abs(offset),
// //             opacity: isAbsVisible ? (isActive ? 1 : 0.6) : 0,
// //             visibility: isAbsVisible ? "visible" : "hidden",
// //           };

// //           return (
// //             <div
// //               key={i}
// //               className="absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
// //               style={style}
// //             >
// //               {/* iPhone Mockup Frame */}
// //               <div className="relative w-[260px] h-[540px] bg-black rounded-[2.5rem] p-2.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] ring-4 ring-gray-800">
// //                 <img
// //                   src={img}
// //                   className="w-full h-full object-cover rounded-[2rem]"
// //                   alt={`Slide ${i}`}
// //                 />
// //                 {/* Speaker/Camera Notch */}
// //                 <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // }












// import { useState, useRef } from "react";

// export default function InfiniteCarousel() {
//   const images = [
//     "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg",
//     "/images/img5.jpg", "/images/img6.jpg", "/images/img7.jpg", "/images/img8.jpg",
//     "/images/img9.jpg", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg",
//     "/images/img13.jpg", "/images/img14.jpg", "/images/img15.jpg", "/images/img16.jpg",
//     "/images/img17.jpg", "/images/img18.jpg", "/images/img19.jpg", "/images/img20.jpg",
//   ];
  
//   const [index, setIndex] = useState(0);
//   const lastMove = useRef(0);

//   const handleMouseMove = (e) => {
//     const now = Date.now();
//     if (now - lastMove.current < 450) return; // Slightly slower transition for a smoother feel

//     const { left, width } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;

//     if (x < width / 2) {
//       setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     } else {
//       setIndex((prev) => (prev + 1) % images.length);
//     }
//     lastMove.current = now;
//   };

//   return (
//     // Updated background to match the light blue/gray in your second video
//     <section className="h-screen flex items-center justify-center bg-[#EBF3FF] overflow-hidden">
//       <div
//         className="relative w-full h-[600px] flex items-center justify-center"
//         onMouseMove={handleMouseMove}
//         // Removed perspective for a flat 2D look
//       >
//         {images.map((img, i) => {
//           let offset = i - index;
          
//           if (offset > images.length / 2) offset -= images.length;
//           if (offset < -images.length / 2) offset += images.length;

//           const isActive = offset === 0;
//           // We only want to see the center and the immediate neighbors
//           const isVisible = Math.abs(offset) <= 1; 

//           const style = {
//             // Simplified transform: Only horizontal movement
//             // 400px provides the wide spacing seen in your video
//             transform: `translateX(${offset * 400}px) scale(${isActive ? 1 : 0.95})`,
            
//             zIndex: isActive ? 20 : 10,
            
//             // Side images are very faint (0.2 opacity) as shown in the video
//             opacity: isActive ? 1 : (isVisible ? 0.2 : 0),
            
//             visibility: isVisible ? "visible" : "hidden",
//           };

//           return (
//             <div
//               key={i}
//               className="absolute transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]"
//               style={style}
//             >
//               {/* Updated Mockup: Light blue phone frame to match video */}
//               <div className="relative w-[280px] h-[580px] bg-[#A5D8FF] rounded-[3.5rem] p-0 overflow-hidden shadow-sm">
//                 <img
//                   src={img}
//                   className="w-full h-full object-cover"
//                   alt={`Slide ${i}`}
//                 />
                
//                 {/* Center text overlay like your video placeholder */}
//                 {!img && (
//                   <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
//                     375x812
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";

// export default function InfiniteCarousel() {
//   const images = [
//     "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg",
//     "/images/img5.jpg", "/images/img6.jpg", "/images/img7.jpg", "/images/img8.jpg",
//     "/images/img9.jpg", "/images/img10.jpg", "/images/img11.jpg", "/images/img12.jpg",
//     "/images/img13.jpg", "/images/img14.jpg", "/images/img15.jpg", "/images/img16.jpg",
//     "/images/img17.jpg", "/images/img18.jpg", "/images/img19.jpg", "/images/img20.jpg",
//   ];
  
//   const [progress, setProgress] = useState(0);

//   const handleMouseMove = (e) => {
//     const { left, width } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const moveToIndex = (x / width) * (images.length - 1);
//     setProgress(moveToIndex);
//   };

//   return (
//     <section className="h-screen flex items-center justify-center bg-[#EBF3FF] overflow-hidden">
//       <div
//         className="relative w-full h-[600px] flex items-center justify-center cursor-crosshair"
//         onMouseMove={handleMouseMove}
//         // This mask makes the edges fade into the background completely
//         style={{
//           WebkitMaskImage: 'linear-gradient(to right, transparent, black 35%, black 65%, transparent)',
//           maskImage: 'linear-gradient(to right, transparent, black 35%, black 65%, transparent)'
//         }}
//       >
//         {images.map((img, i) => {
//           let offset = i - progress;
          
//           // Logic: Only images very close to center are visible
//           const isVisible = Math.abs(offset) <= 1.2; 
          
//           // Calculate Blur: 0px at center, up to 8px on sides
//           const blurValue = Math.min(8, Math.abs(offset) * 10);
          
//           // Calculate Opacity: fades out much faster now
//           const dynamicOpacity = Math.max(0, 1 - Math.abs(offset) * 1.5);

//           const style = {
//             transform: `translateX(${offset * 450}px) scale(${1 - Math.abs(offset) * 0.15})`,
//             zIndex: Math.round(100 - Math.abs(offset) * 10),
//             opacity: isVisible ? dynamicOpacity : 0,
//             // Apply the blur filter
//             filter: `blur(${blurValue}px)`,
//             visibility: isVisible ? "visible" : "hidden",
//           };

//           return (
//             <div
//               key={i}
//               className="absolute transition-all duration-300 ease-out pointer-events-none"
//               style={style}
//             >
//               <div className="relative w-[280px] h-[580px] bg-[#A5D8FF] rounded-[3.5rem] p-0 overflow-hidden shadow-2xl border-2 border-white/30">
//                 <img
//                   src={img}
//                   className="w-full h-full object-cover"
//                   alt={`Slide ${i}`}
//                   draggable={false}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";

export default function InfiniteCarousel() {
  const images = [
    "/WhatsApp Image 2026-04-26 at 12.10.20 AM.jpeg", "/WhatsApp Image 2026-04-26 at 12.10.20 AM (1).jpeg", "/WhatsApp Image 2026-04-26 at 12.10.19 AM.jpeg", "/WhatsApp Image 2026-04-26 at 12.10.19 AM (1).jpeg" 
    ,"/WhatsApp Image 2026-04-26 at 12.10.19 AM (2).jpeg","/WhatsApp Image 2026-04-26 at 12.10.18 AM.jpeg","/WhatsApp Image 2026-04-25 at 5.56.51 PM.jpeg",
  ];
  
  const [index, setIndex] = useState(0);

  // Automatic transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        className="relative w-full h-[700px] flex items-center justify-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)'
        }}
      >
        {images.map((img, i) => {
          // Calculate the shortest distance for infinite wrapping
          let offset = i - index;
          if (offset > images.length / 2) offset -= images.length;
          if (offset < -images.length / 2) offset += images.length;

          const absOffset = Math.abs(offset);
          
          // Only render/animate nearby images for performance
          const isVisible = absOffset <= 2; 

          // Visual smoothers
          const blurValue = absOffset < 0.1 ? 0 : Math.min(12, absOffset * 8);
          const scaleValue = 1 - Math.min(0.2, absOffset * 0.12);

          const style = {
            transform: `translateX(${offset * 580}px) scale(${scaleValue})`,
            zIndex: Math.round(100 - absOffset * 10),
            opacity: isVisible ? Math.max(0, 1 - absOffset * 0.9) : 0,
            filter: `blur(${blurValue}px)`,
            visibility: isVisible ? "visible" : "hidden",
          };

          return (
            <div
              key={i}
              // Keeping the premium cubic-bezier for the auto-slide
              className="absolute transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)] pointer-events-none"
              style={style}
            >
              <div className="relative w-[300px] h-[600px] bg-[#A5D8FF] rounded-[3.5rem] p-0 overflow-hidden 
                border-[6px] border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={`Slide ${i}`}
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}