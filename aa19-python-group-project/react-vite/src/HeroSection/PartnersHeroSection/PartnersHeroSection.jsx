export default function PartnersHeroSection() {
    return (
        <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('./collab.webp')" }}>
            {/* White Overlay - Set a smaller height */}
            <div className="absolute top-0 left-0 w-full h-[70vh] bg-white bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
                <h1 className="text-4xl md:text-6xl font-bold">Empowering a Sustainable Future</h1>
                <p className="text-lg md:text-xl mt-4">
                    Discover our mission, vision, and the team driving innovation in funding and planning.
                </p>

                <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    <a
                        href="#eligibility"
                        className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition"
                    >
                       Become a Partner
                    </a>
                </div>
            </div>
        </div>
    );
}
