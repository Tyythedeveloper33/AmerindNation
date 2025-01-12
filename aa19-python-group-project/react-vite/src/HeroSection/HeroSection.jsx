const HeroSection = () => {
    return (
      <div
        className="w-full h-5/6 bg-cover bg-center" // Height remains h-5/6
        style={{
          backgroundImage: "url('./solarFarm.webp')", // Use your solar farm image here
        }}
      >
        {/* Optional Overlay for Better Contrast */}
        <div className="bg-white bg-opacity-60 w-full h-full absolute top-0 left-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-black pt-[20%] pb-[20%]"> {/* Padding for content */}
          <h1 className="text-4xl md:text-6xl font-bold">Funding and Planning Specialists</h1>
          <p className="text-lg md:text-xl mt-4">
            Empowering sustainable energy projects with strategic funding and comprehensive planning solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4"> {/* Added margin-top */}
            {/* CTA 1 */}
            <a
              href="#mission" // Replace with the correct ID for the Mission & Vision section
              className="bg-[#08FEB3] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#06d1a0] transition"
            >
              Explore Our Mission
            </a>

            {/* CTA 2 */}
            <a
              href="#eligibility" // Replace with the correct link for the contact form/eligibility page
              className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition"
            >
              Schedule Your Eligibility Interview
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default HeroSection;
