export default function SageHeroSection() {
    return (
      <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('./collab.webp')" }}>
        {/* White Overlay */}
        <div className="absolute top-0 left-0 w-full h-[70vh] bg-white bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
             Sage Business Finance Renovation
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl font-semibold">
            At Amerind Sage, we tailor our services to the unique needs and size of your business.
            Whether you're a solo entrepreneur or a growing small business with a full-time team, our program is
            designed to optimize your financial operations, digital presence, and strategic planning.
            Our holistic approach ensures that every facet of your business is aligned for sustainable growth and success.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <a
              href="#start"
              className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition"
            >
              Start with Sage Today
            </a>
          </div>
        </div>
      </div>
    );
  }
