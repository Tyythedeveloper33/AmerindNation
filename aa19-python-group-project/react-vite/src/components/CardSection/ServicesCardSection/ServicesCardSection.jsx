import { useState } from "react";

const ServicesCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Funding Readiness",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
      icon: "💼", // Updated emoji
      details: (
        <ul className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] list-disc list-inside">
          <li>Team</li>
          <li>Skills</li>
          <li>Credentials</li>
        </ul>
      ),
    },
    {
      title: "Business Optimization",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
      icon: "💼", // Updated emoji
      details: (
        <ul className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#264F51] list-disc list-inside">
          <li>Accounting and Auditing</li>
          <li>Digital Presence</li>
        </ul>
      ),
    },
    {
      title: "Strategic Planning",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]", // Cyan-blue gradient
      icon: "📝", // Updated emoji
      details: (
        <ul className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#24959E] list-disc list-inside">
          <li>Direction (Mission, Vision, Values)</li>
          <li>Business Plan</li>
          <li>Pro Forma</li>
        </ul>
      ),
    },
    {
      title: "Technical Assistance",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]", // Aqua gradient
      icon: "🛠️", // Updated emoji
      details: (
        <ul className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#0FC99B] list-disc list-inside">
          <li>Applications</li>
          <li>Training</li>
          <li>Project Management</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full ${
              index === 0 ? "lg:w-[500px]" : // Funding Readiness stays the same
              index === 1 ? "lg:w-[530px]" : // Business Optimization made a little wider
              index === 2 ? "lg:w-[500px]" : // Strategic Planning stays the same
              "lg:w-[500px]" // Technical Assistance stays the same
            } flex flex-col`}
          >
            {/* Card Section */}
            <div
              className={`relative ${
                expandedCard !== null && expandedCard !== index
                  ? "bg-gray-200"
                  : card.gradient
              } rounded-t-xl p-6 shadow-lg flex flex-col`}
            >
              {/* Icon in the Top-Left */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              {/* Title Centered */}
              <h3 className="text-lg font-bold text-white text-center">
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

export default ServicesCardSection;
