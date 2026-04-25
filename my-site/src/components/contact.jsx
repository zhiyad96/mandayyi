export default function Contact() {
  return (
    <section className="min-h-screen bg-[#050505] text-white py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: PRE-CONTACT INFO */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
              ഒന്ന് മുട്ടി <span className="text-blue-400">നോക്ക് നമ്പിയാരേ......</span>
            </h2>
            {/* <p className="text-gray-400 text-lg max-w-sm font-light">
              Have a vision? We have the team to build it. Reach out and let’s create something legendary.
            </p> */}
          </div>

          <div className="space-y-8">
            {/* PHONE NUMBERS - Sleek Pill Layout */}
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all duration-500">
                <span className="text-sm">📞</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-widest text-gray-500">Call Us</p>
                <div className="flex gap-4">
                  <a href="tel:+910000000000" className="text-lg font-medium hover:text-blue-400 transition-colors">+91 98765 43210</a>
                  <span className="text-white/20">|</span>
                  <a href="tel:+910000000000" className="text-lg font-medium hover:text-blue-400 transition-colors">+91 01234 56789</a>
                </div>
              </div>
            </div>

            {/* INSTAGRAM & SOCIALS */}
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-black transition-all duration-500">
                <span className="text-sm">📸</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Follow Us</p>
                <a 
                  href="https://instagram.com/teammandayi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  @teammandayi
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all duration-500">
                <span className="text-sm">✉️</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
                <p className="text-lg font-medium">hello@teammandayi.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <form className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2rem] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-400/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-400/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
              />
            </div>

            <button className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}