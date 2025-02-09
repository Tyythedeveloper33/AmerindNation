import { useState } from "react";

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
            &quot;Innovative solutions currently in development.&quot;
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Community Energy Connectors</strong>
              <br />
              <a
                href="https://ceconnectors.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Community Energy Connectors is a self-sustaining force in clean energy technical assistance for the entire nation, including all urban, rural, territory, and Tribal communities. We intend for it to become a vast and valuable resource for underserved communities, energy program resources, and innovative and generous connectors.
              </p>
              <p className="mt-2">
                <a
                  href="https://amerindnation.com/cec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Join the Community Energy Connectors initiative
                </a>
              </p>
            </li>
            <li>
              <strong>EECBG Local Public Energy</strong>
              <br />
              <a
                href="https://energycommunities.gov/funding-opportunity/bil-opportunity-energy-efficiency-and-conservation-block-grant-program-3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                The Energy Efficiency and Conservation Block Grant (EECBG) Program is designed to assist states, local governments, and Tribes in implementing strategies to reduce energy use, to reduce fossil fuel emissions, and to improve energy efficiency.
              </p>
              <p className="mt-2">
                If you represent a Tribe or intertribal organization,{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={() => alert("Schedule Eligibility pop-up")}
                >
                  contact us
                </a>{" "}
                to schedule an eligibility consultation.
              </p>
            </li>
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
            &quot;A portfolio of impactful solutions.&quot;
          </p>
          <ul className="mt-4 text-gray-700 leading-relaxed list-disc pl-6">
            <li>
              <strong>Waffle Forest</strong>
              <br />
              <a
                href="https://www.waffleforest.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Assisted an Arizona nonprofit with a $50M grant application for urban and rural reforestation and brownfield reclamation—completing it in seven days. Also developed a long-term strategy for carbon capture and plant bioinformatics initiatives.
              </p>
            </li>
            <li>
              <strong>Minority Professional Truckers Association (MPTA)</strong>
              <br />
              <a
                href="https://minorityprofessionaltruckersassociation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Assisted MPTA in creating a business plan and website, trained dozens of people on requirements for opening truck driver training schools, and consulted with a national organization to help thousands expand their presence in rural food markets.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div key={index} className="mb-6">
            <div
              className={`cursor-pointer p-6 rounded-lg shadow-md text-white flex items-center justify-between ${card.gradient}`}
              onClick={() => handleToggle(index)}
            >
              <span className="text-2xl font-semibold">{card.title}</span>
              <span className="text-3xl">{card.icon}</span>
            </div>
            {expandedCard === index && card.details}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCardSection;
