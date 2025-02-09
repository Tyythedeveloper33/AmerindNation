import { motion } from "framer-motion";

const HomeHeroSection = () => {
  return (
    <div
      className="w-full h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('./solarFarm.webp')",
      }}
    >
      <div className="bg-white bg-opacity-60 w-full h-full absolute top-0 left-0"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black pt-[15%] pb-[10%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Funding and Planning Specialists
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Empowering sustainable energy projects with strategic funding and
          comprehensive planning solutions.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="#eligibility"
            className="bg-[#2F6368] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#264F51] transition"
          >
            Schedule Your Eligibility Interview
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeHeroSection;

