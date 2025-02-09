import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <div
      className="w-full h-[70vh] bg-cover bg-center relative" // Adjusted height to 70vh
      style={{
        backgroundImage: "url('./collab.webp')", // Replace with your desired image
      }}
    >
      {/* Overlay for Better Contrast */}
      <motion.div
        className="bg-white bg-opacity-60 w-full h-full absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Empowering a Sustainable Future
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover our mission, vision, and the team driving innovation in funding and planning.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#eligibility"
            className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition transform hover:scale-105"
          >
            Schedule Your Eligibility Interview
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHeroSection;
