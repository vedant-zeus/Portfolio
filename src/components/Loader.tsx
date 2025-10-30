import React from "react";

const Loader: React.FC = () => {
  return (
    <section
      id="loader"
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 z-50 font-mono text-blue-400"
    >
      {/* Terminal window */}
      <div className="bg-black/60 border border-blue-800 rounded-lg p-6 w-[320px] md:w-[420px] shadow-[0_0_30px_rgba(37,99,235,0.6)]">
        <div className="flex gap-2 mb-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Typing animation */}
        <div className="text-sm md:text-base leading-relaxed whitespace-pre">
          <span className="animate-typing block overflow-hidden border-r-2 border-blue-400 pr-2">
{`> Initializing developer environment...
> Loading React components...
> Importing creativity modules...
> Compiling code...
> Launching portfolio...`}
          </span>
        </div>
      </div>

      {/* Subtext */}
      <h2 className="mt-8 text-blue-300 text-sm tracking-widest animate-text-glow">
        // please wait while code compiles...
      </h2>
    </section>
  );
};

export default Loader;
