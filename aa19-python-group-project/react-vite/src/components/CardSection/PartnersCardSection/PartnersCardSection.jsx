import { useState } from "react";
import { motion } from "framer-motion";

const PartnersCardSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "Funding & Development",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]",
      icon: "💼",
      details: (
        <motion.div
          className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="text-xl font-semibold text-gray-800 text-center">
  Funding & Development Partners:
</h2>
<div className="mt-4 text-gray-700">
  <p className="mb-2">
    <span className="font-semibold">Communities Unlimited:</span> This organization focuses on improving the quality of life for low-income communities by providing grants and developing funding strategies. They are committed to empowering underfunded communities through sustainable development.
  </p>
  <p className="mb-2">
    <span className="font-semibold">RCAP (Rural Community Assistance Partnership):</span> RCAP works to improve the lives of rural Americans by providing technical assistance and training on water and wastewater systems. They play a crucial role in rural community development by offering direct support and solutions for sustainable growth.
  </p>
  <p className="mb-2">
    <span className="font-semibold">1 Click Consultants:</span> A consulting firm that specializes in helping organizations secure funding through grants, innovative solutions, and strategic development. They work across various sectors, ensuring that clients receive the financial resources they need for growth.
  </p>
  <p className="mb-2">
    <span className="font-semibold">Evergreen Technical Solutions:</span> This company provides consulting and technical services in environmental sustainability, offering solutions that enhance the operations of both public and private sector organizations.
  </p>
  <p className="mb-2">
    <span className="font-semibold">Essential Leap:</span> A consulting group that focuses on creating pathways to sustainable development through innovative financing and development strategies. Their expertise lies in helping communities and organizations move toward economic growth through impactful solutions.
  </p>
</div>

        </motion.div>
      ),
    },
    {
      title: " Energy > Professionals",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]",
      icon: "⚡",
      details: (

        <motion.div
  className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-xl font-semibold text-gray-800 text-center">
    Energy Professionals:
  </h2>
  <div className="mt-4 text-gray-700">
    <p className="mb-2">
      <span className="font-semibold">Green Roof Energy:</span> This company specializes in sustainable energy solutions, focusing on the development of green roofs and renewable energy systems to reduce environmental impact and promote energy efficiency.
    </p>
    <p className="mb-2">
      <span className="font-semibold">DRG Technical Solutions:</span> DRG provides cutting-edge solutions in energy systems design, focusing on energy efficiency, renewable energy integration, and sustainable technology to help clients reduce energy costs and improve operational sustainability.
    </p>
    <p className="mb-2">
      <span className="font-semibold">Agile Fractal Grid:</span> A pioneering company in the development of decentralized energy systems, Agile Fractal Grid focuses on improving grid resilience and creating efficient, sustainable energy networks to empower local communities.
    </p>
    <p className="mb-2">
      <span className="font-semibold">eFormative Options:</span> eFormative Options offers innovative energy solutions with a focus on providing technical assistance and strategy development for organizations looking to integrate sustainable and energy-efficient practices.
    </p>
    <p className="mb-2">
      <span className="font-semibold">X Utility:</span> X Utility works on advanced energy management solutions, helping clients optimize their energy consumption through data-driven strategies and cutting-edge technologies aimed at reducing environmental footprints.
    </p>
  </div>



        </motion.div>
      ),
    },
    {
      title: "Preservation & Transportation",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]",
      icon: "🚚",
      details: (
        <motion.div
        className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Preservation & Transportation:
        </h2>
        <div className="mt-4 text-gray-700">
          <p className="mb-2">
            <span className="font-semibold">Flying Over Time:</span> A company specializing in the preservation and transportation of historical records through the use of innovative aerial and drone technology, ensuring the safe and efficient delivery of sensitive materials to archives and museums.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Preserving Records Everywhere:</span> This organization focuses on digitizing and archiving records from various industries, ensuring that valuable historical and legal documents are preserved in accessible formats for future generations.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Save My History:</span> Save My History offers services in the protection and preservation of historical artifacts and records, leveraging modern technology to safeguard important cultural and personal histories against deterioration and loss.
          </p>
          <p className="mb-2">
            <span className="font-semibold">HeyCharge:</span> HeyCharge works on the transportation and preservation of electronic devices and records, offering secure solutions for mobile charging and digital archiving during the transportation of electronic devices across distances.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Terra Azul Tech:</span> This company focuses on sustainable preservation practices for historical and transportation records, using advanced technology to protect, store, and securely transport important documents and artifacts globally.
          </p>
        </div>
      </motion.div>

      ),
    },
    {
      title: "Tribal >> Organizations",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]",
      icon: "🌿",
      details: (
        <motion.div
        className="bg-gray-50 p-6 rounded-b-lg shadow-md border-t-4 border-[#467F5D] w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Tribal Organizations:
        </h2>
        <div className="mt-4 text-gray-700">
          <p className="mb-2">
            <span className="font-semibold">ITC (Indian Technology and Communications):</span> ITC provides technological solutions tailored for tribal organizations, including internet access, digital infrastructure, and tech support to help native communities thrive in the modern world.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Choctaw Nation:</span> The Choctaw Nation is one of the largest Native American tribes in the U.S., working to empower its people through various initiatives, including technology, economic development, and preserving cultural heritage.
          </p>
          <p className="mb-2">
            <span className="font-semibold">San Carlos Apache:</span> The San Carlos Apache Tribe focuses on improving the lives of its members by providing access to healthcare, education, and economic opportunities, as well as developing infrastructure that benefits the community.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Indigenous Habitat Institute:</span> This organization focuses on environmental sustainability and community-driven development, working with indigenous tribes to protect and preserve their habitats while promoting cultural and economic growth.
          </p>
        </div>
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
            className="w-full lg:w-[330px] flex flex-col" // Slightly smaller width for all cards except the first
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div
              className={`relative ${expandedCard !== null && expandedCard !== index ? "bg-gray-200" : card.gradient} rounded-t-xl p-6 shadow-lg flex flex-col cursor-pointer`}
              onClick={() => handleToggle(index)}
            >
              <div className="absolute top-4 left-4 bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              <button className="absolute top-4 right-4 bg-white bg-opacity-25 rounded-full p-2 focus:outline-none">
                <span className="text-white text-2xl font-bold">
                  {expandedCard === index ? "−" : "+"}
                </span>
              </button>
            </div>

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

      <div className="mt-8 max-w-7xl mx-auto">
        {expandedCard !== null && cards[expandedCard].details}
      </div>
    </div>
  );
};

export default PartnersCardSection;
