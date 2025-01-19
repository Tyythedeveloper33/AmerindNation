import { NavLink } from "react-router-dom";

const HomeCardSection = () => {
  const cards = [
    {
      title: "About Us",
      description: "Learn more about our mission and vision.",
      gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
      icon: "⚡",
      link: "/about", // Link for "About Us" card
    },
    {
      title: "Our Partners",
      description: "Collaborating with the best in the industry.",
      gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
      icon: "🤝",
      link: "/partners", // Link for "Our Partners" card
    },
    {
      title: "Our Portfolio",
      description: "Explore innovative solutions for energy.",
      gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]", // Cyan-blue gradient
      icon: "🔋",
      link: "/portfolio", // Link for "Our Portfolio" card
    },
    {
      title: "Our Services",
      description: "Your journey to sustainability starts here.",
      gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]", // Aqua gradient
      icon: "🌞",
      link: "/services", // Link for "Our Solutions" card
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-[320px] lg:w-[300px] xl:w-[280px] ${card.gradient} rounded-xl p-6 shadow-2xl`} // Increased width
          >
            {/* Top Section: Icon, Title, and Plus Icon */}
            <div className="flex items-center justify-between mb-4"> {/* Adjusted margin-bottom */}
              {/* Icon on the Left */}
              <div className="bg-white bg-opacity-25 rounded-full p-2">
                <span className="text-3xl text-white">{card.icon}</span>
              </div>

              {/* Title in the Center */}
              <h3 className={`text-${card.title === "About Us" ? "lg" : "md"} font-bold text-white`}>
                {card.title}
              </h3>

              {/* Plus Sign on the Right */}
              <NavLink
                to={card.link}
                className="bg-white bg-opacity-25 rounded-full p-2 focus:outline-none"
              >
                <span className="text-white text-2xl font-bold">+</span>
              </NavLink>
            </div>

            {/* Description at the Bottom */}
            <p className="text-white text-opacity-90 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;
