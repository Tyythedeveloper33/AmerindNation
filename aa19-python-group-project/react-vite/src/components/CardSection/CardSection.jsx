const CardSection = () => {
    const cards = [
      {
        title: "Home",
        description: "Your journey to sustainability starts here.",
        gradient: "bg-gradient-to-br from-[#08FEB3] to-[#0FC99B]", // Aqua gradient
        icon: "🌞", // Replace with SVG
      },
      {
        title: "About Us",
        description: "Learn more about our mission and vision.",
        gradient: "bg-gradient-to-br from-[#55926F] to-[#467F5D]", // Green gradient
        icon: "⚡",
      },
      {
        title: "Our Partners",
        description: "Collaborating with the best in the industry.",
        gradient: "bg-gradient-to-br from-[#2F6368] to-[#264F51]", // Teal-blue gradient
        icon: "🤝",
      },
      {
        title: "Our Projects",
        description: "Explore innovative solutions for energy.",
        gradient: "bg-gradient-to-br from-[#33A9B5] to-[#24959E]", // Cyan-blue gradient
        icon: "🔋",
      },
    ];

    return (
      <div className="w-full bg-gray-50 py-20">
        {/* Container */}
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[300px] lg:w-[280px] xl:w-[260px] h-[380px] ${card.gradient} rounded-xl p-6 text-center shadow-2xl transition-transform transform hover:scale-105`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-25 rounded-full mx-auto mb-6">
                <span className="text-4xl text-white">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

              {/* Description */}
              <p className="text-white text-opacity-90 mb-8 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Button */}
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default CardSection;

