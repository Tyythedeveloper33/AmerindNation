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
            <li>
              <strong>REAP Rural Energy</strong>
              <br />
              <a
                href="https://www.rd.usda.gov/programs-services/energy-programs/rural-energy-america-program-renewable-energy-systems-energy-efficiency-improvement-guaranteed-loans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                The program provides guaranteed loan financing and grant funding to agricultural producers and rural small businesses for renewable energy systems or to make energy efficiency improvements. Agricultural producers may also apply for new energy efficient equipment and new system loans for agricultural production and processing.
              </p>
              <p className="mt-2">
                Are you a rural or tribal business?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={() => alert("Schedule Eligibility pop-up")}
                >
                  Schedule a time to meet with us
                </a>
                .
              </p>
            </li>
            <li>
              <strong>State/Tribal Grid Resilience</strong>
              <br />
              <a
                href="https://www.energy.gov/gdo/grid-resilience-statetribal-formula-grants-program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Authorized by the Infrastructure Investment and Jobs Act, managed through the Grid Deployment Office (GDO), and administered by the National Energy Technology Laboratory (NETL), the Grid Resilience State and Tribal Formula Grants program is designed to strengthen and modernize America’s power grid against wildfires, extreme weather, and other natural disasters.
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
            "A portfolio of impactful solutions."
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
            <li>
              <strong>Tribal Housing (HUD)</strong>
              <br />
              <a
                href="https://www.hud.gov/program_offices/public_indian_housing/ih/grants/ihbg_cgp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                In just 10 days, developed a plan for an Arizona Tribe's $6 million HUD grant application to rebuild 36 homes for families displaced by a devastating wildfire. Worked with 20 stakeholders to assess needs, prioritize affected sites, and develop comprehensive budgets.
              </p>
            </li>
            <li>
              <strong>TBCP (Department of Commerce - BroadbandUSA)</strong>
              <br />
              <a
                href="https://broadbandusa.ntia.doc.gov/funding-programs/tribal-broadband-connectivity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the website
              </a>
              <p className="mt-2">
                Assisted 10 Oklahoma Tribes in drafting three Department of Commerce applications for the National Telecommunications and Information Administration (NTIA) Tribal Broadband Connectivity Program (TBCP) Round 2. The applications, totaling over $110 million, aimed to advance broadband adoption and infrastructure, including language and cultural preservation programs and sustainable workforce initiatives for data sovereignty.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-start">
        {cards.map((card, index) => (
          <div key={index} className="w-full lg:w-[450px] flex flex-col gap-4">
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
              <h3 className="text-2xl font-bold text-white text-center">
                {card.title}
              </h3>

              {/* Toggle Button */}
              <button
                onClick={() => handleToggle(index)}
                className="absolute top-4 right-4 bg-transparent text-white text-lg"
              >
                {expandedCard === index ? "⬆️" : "⬇️"}
              </button>
            </div>

            {/* Expandable Details */}
            {expandedCard === index && card.details}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCardSection;
