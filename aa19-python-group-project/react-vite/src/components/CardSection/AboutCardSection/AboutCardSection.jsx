import  { useState } from "react";
import { motion } from "framer-motion";
import TeamMembers from "../../TeamMembers";
const AboutCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Mission & Vision",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "🌍",
      details: (
        <motion.div
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Our Mission & Vision
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            <span className="font-semibold text-lg">Our Mission:</span>
            At <span className="font-semibold">Amerind Nation</span>, we empower innovators to reach their maximum potential by tackling food security and supply chain logistics.
            We uplift **overlooked** and **marginalized leaders**, fostering solutions that drive meaningful change.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            <span className="font-semibold text-lg">Our Vision:</span>
            We are committed to <span className="font-semibold">creating a future where sustainable energy is the standard</span>.
            Our vision is a world where **businesses and innovators** collaborate to build a **balanced, self-sufficient, and sustainable future**.
          </p>

          <p className="mt-6 text-gray-700 font-semibold text-center">Our Core Values:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex items-start space-x-2">
              <span className="text-2xl">🌱</span>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Sustainability</span> – Building long-term solutions that preserve resources and the environment.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-2xl">🚀</span>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Innovation</span> – Encouraging new ideas and creative problem-solving.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-2xl">🛡️</span>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Integrity</span> – Upholding honesty, transparency, and accountability.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-2xl">🤝</span>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Collaboration</span> – Working together to drive meaningful change.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Our Team",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "👥",
      details: (
        <motion.div
        className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-2xl font-semibold text-gray-800 text-center italic">
          "Passion and expertise in sustainability."
        </p>
        <TeamMembers/>
        <p className="mt-4 text-gray-700 leading-relaxed text-center">
          Meet our diverse team of professionals driving success for our partners.
        </p>
      </motion.div>

      ),
    },
    {
      title: "Rural & Tribal Focus",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "🪶",
      details: (
        <motion.div
        className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

      </motion.div>
      ),
    },
    {
      title: "Our Companies",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🏢",
      details: (
        <motion.div
        className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

      </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-[375px] flex flex-col" // Adjusted the width of all other cards to be a tiny bit smaller
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Special case for the "Our Team" card */}
            <div
              className={`relative ${expandedCard !== null && expandedCard !== index ? "bg-gray-200" : card.gradient} rounded-t-xl p-6 shadow-lg flex flex-col cursor-pointer ${
                card.title === "Our Team" ? "lg:w-[300px]" : "lg:w-[375px]" // "Our Team" card keeps default size, others are smaller
              }`}
              onClick={() => handleToggle(index)}
            >
              {/* Icon */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              {/* Toggle Button */}
              <button className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none">
                <span className="text-white text-2xl font-bold">
                  {expandedCard === index ? "−" : "+"}
                </span>
              </button>
            </div>

            {/* Animated Connector */}
            {expandedCard === index && (
              <motion.div
                className={`h-4 ${card.gradient}`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Expanded Content */}
      <div className="mt-8 max-w-7xl mx-auto">
        {expandedCard !== null && cards[expandedCard].details}
      </div>
    </div>
  );
};

export default AboutCardSection;
