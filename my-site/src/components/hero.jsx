export default function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. THE BASE IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{
          backgroundImage: `url('/WhatsApp Image 2026-04-25 at 5.56.51 PM.jpeg')`,
        }}
      />

      {/* 2. THE MULTI-LAYER OVERLAY */}
      <div className="absolute inset-0">
        {/* Layer A: Darkening Tint (Top to Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        
        {/* Layer B: Radial Vignette (Bright center, dark edges) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
        
        {/* Layer C: Subtle Grain/Noise (Optional - gives a filmic feel) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 3. CONTENT AREA */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Badge */}
        <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Est. 2026
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter leading-tight">
          Mandayi<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-500"> Stories</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          we are neet and clean boys .
        </p>

        {/* Call to Action */}
       
      </div>

      {/* 4. BOTTOM FADE (Smooth transition to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}