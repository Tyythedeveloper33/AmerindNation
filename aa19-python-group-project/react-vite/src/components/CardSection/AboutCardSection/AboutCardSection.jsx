import React, { useState } from "react";

const AboutCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Our Mission",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
      icon: "🌍",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D]">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Empowering Innovators to Reach Their Maximum Potential
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At Amerind Nation, we have carefully selected & developed our leadership team to focus on solving the issues surrounding food security & supply chain logistics.
            We are fully committed to bringing the best strategies & tools to the forefront for all business owners, farmers, producers, suppliers & transporters.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We understand by leveling the balance of power & empowering those leaders who have been overlooked, marginalized & devalued, we can create a cooperative leadership force, poised to rescue a failing system.
            We are committed to our heritage, the successful amalgamation of multiple cultures—centered around self-sufficiency, sustainability, and cooperative empowerment.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Amerind Nation is our parent company & home to a series of business leaders focused on commissioning the next generation of leadership by connecting & reconnecting communities to their heritage.
            We seek to aid them in developing their own talents, skills & capabilities for solving the challenges of today, for impact into tomorrow.
          </p>
        </div>
      ),
    },
    {
      title: "Our Vision",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
      icon: "🔮",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#264F51]">
          <p className="text-xl font-semibold text-gray-800">
            "Creating a future where sustainable energy is the standard."
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We envision a world where businesses, farmers, and innovators are empowered to create a sustainable, balanced future through environmental stewardship and innovative practices.
          </p>
        </div>
      ),
    },
    {
      title: "Core Values",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]", // Cyan-blue gradient
      icon: "💡",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#24959E]">
          <p className="text-xl font-semibold text-gray-800">
            "Sustainability, innovation, integrity, and collaboration."
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We prioritize these values in every action we take, ensuring that our projects and partnerships align with a brighter and more sustainable future.
          </p>
        </div>
      ),
    },
    {
      title: "Our Team",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]", // Aqua gradient
      icon: "👥",
      details: (
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#0FC99B]">
         <p className="mt-4 text-xl font-semibold text-gray-800 text-center">
  "Passion and expertise in sustainability."
</p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Meet our diverse team of professionals, who bring their knowledge and passion for sustainability to every project, driving success and innovation for our partners and clients.
          </p>

          {/* Team Information */}
          {expandedCard === 3 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Jenni Schlosberg"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Jenni Schlosberg</h4>
                <p>CEO & Founder</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Pace Ellsworth"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Pace Ellsworth</h4>
                <p>CIO & Co-Founder</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Gina Lansing"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Gina Lansing, CPA</h4>
                <p>CFO</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Pash Lal"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Pash Lal</h4>
                <p>Quality Assurance</p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Holly Alsop"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Holly Alsop</h4>
                <p>COO</p>
              </div>

              {/* Team Member 6 */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Ken Cheng"
                  className="mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">Ken Cheng</h4>
                <p>Construction Manager</p>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
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

export default AboutCardSection;
