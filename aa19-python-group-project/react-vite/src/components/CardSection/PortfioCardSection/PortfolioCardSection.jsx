import React, { useState } from "react";

const PortfolioCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Current Projects",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
      icon: "🚀",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D]">
          <p className="text-xl font-semibold text-gray-800">
            "Innovative solutions currently in development."
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>Community Energy Connectors</li>
            <li>Municipal Water Projects</li>
            <li>Energy Efficiency & Conservation Block Grants</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Past Projects",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
      icon: "📂",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#264F51]">
          <p className="text-xl font-semibold text-gray-800">
            "A portfolio of impactful solutions."
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>Housing Aid for San Carlos Apache</li>
            <li>Rural Renewable Energy Projects</li>
            <li>Broadband for 10 Oklahoma Tribes</li>
            <li>Reforestation Grant in Arizona</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Portfolio Projects</h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <div key={index} className={`w-full lg:w-[350px] flex flex-col`}>
            {/* Card Section */}
            <div
              className={`relative ${expandedCard !== null && expandedCard !== index ? "bg-gray-200" : card.gradient} rounded-t-xl p-6 shadow-lg flex flex-col`}
            >
              {/* Icon in the Top-Left */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              {/* Title Centered */}
              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              {/* Toggle Button */}
              <button
                onClick={() => handleToggle(index)}
                className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none"
              >
                <span className="text-white text-2xl font-bold">
                  {expandedCard === index ? "−" : "+"}
                </span>
              </button>
            </div>

            {/* Visual "Connector" */}
            {expandedCard === index && (
              <div
                className={`h-4 ${card.gradient}`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Expanded Content Below Cards */}
      <div className="mt-8 max-w-7xl mx-auto">
        {expandedCard !== null && (
          <div className="mt-4">{cards[expandedCard].details}</div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCardSection;
