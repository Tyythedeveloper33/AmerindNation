import React, { useState } from 'react';

const servicesData = [
  {
    category: "Preservation",
    tasks: [
      {
        title: "Program Dashboard",
        emoji: "🖥️",
        description: "Get your team into your own custom dashboard to access all tasks, documents, and systems—complete with deadlines and smart automations.",
        benefit: "This centralized dashboard streamlines your operations, ensuring your business stays organized and on track for growth."
      },
      {
        title: "Data Backup",
        emoji: "💾",
        description: "Secure your critical business data with automated backups, so you never have to worry about losing important information.",
        benefit: "Data protection helps prevent business downtime due to data loss, ensuring you have continuous access to essential files."
      },
      {
        title: "Disaster Recovery Plan",
        emoji: "⚡",
        description: "Prepare for the unexpected with a disaster recovery plan that outlines the steps to take in case of an emergency, from system outages to cyberattacks.",
        benefit: "This plan minimizes operational interruptions and helps you quickly recover from any disruption, protecting your business reputation."
      }
    ]
  },
  {
    category: "Optimization",
    tasks: [
      {
        title: "System Performance Enhancement",
        emoji: "🚀",
        description: "Optimize your existing systems to improve performance, reduce downtime, and increase efficiency.",
        benefit: "Enhancing system performance improves employee productivity and reduces delays, leading to a more streamlined operation."
      },
      {
        title: "Automation Setup",
        emoji: "🤖",
        description: "Implement automation to reduce manual tasks, increase speed, and reduce the chance of human error.",
        benefit: "Automation simplifies workflows, freeing up time for strategic tasks and improving the overall quality of work."
      },
      {
        title: "Cloud Integration",
        emoji: "☁️",
        description: "Move your operations to the cloud for better accessibility, flexibility, and scalability.",
        benefit: "Cloud integration enables real-time collaboration, improves storage options, and supports business growth without significant infrastructure investment."
      }
    ]
  },
  {
    category: "Security",
    tasks: [
      {
        title: "Advanced Firewall Protection",
        emoji: "🛡️",
        description: "Install and configure advanced firewall solutions to safeguard your business against external threats and cyberattacks.",
        benefit: "A strong firewall ensures the integrity of your systems, keeping data safe from unauthorized access and reducing the risk of breaches."
      },
      {
        title: "Encryption Services",
        emoji: "🔐",
        description: "Encrypt sensitive data both in transit and at rest to ensure your business's information is secure at all times.",
        benefit: "Data encryption provides an extra layer of protection for critical business information, safeguarding against data theft and unauthorized access."
      },
      {
        title: "Identity and Access Management",
        emoji: "🗝️",
        description: "Control access to your systems by implementing strict identity and access management protocols.",
        benefit: "This system ensures that only authorized individuals can access sensitive information, reducing the chances of internal and external threats."
      }
    ]
  },
  {
    category: "Growth",
    tasks: [
      {
        title: "Lead Generation Tools",
        emoji: "🔍",
        description: "Use advanced tools and techniques to generate high-quality leads that convert into loyal customers.",
        benefit: "Generating qualified leads helps you reach the right customers, increasing the chances of successful conversions and growing your business."
      },
      {
        title: "Customer Relationship Management (CRM)",
        emoji: "💼",
        description: "Implement a CRM system to track and manage customer interactions and data throughout the customer lifecycle.",
        benefit: "A well-managed CRM system improves customer service, enhances sales, and helps build long-lasting relationships with clients."
      },
      {
        title: "Market Analysis and Reporting",
        emoji: "📊",
        description: "Utilize data analytics tools to gain insights into market trends and your competitors, helping you make informed business decisions.",
        benefit: "Market analysis gives you the edge in identifying opportunities and threats in the market, allowing you to tailor your strategies for success."
      }
    ]
  },
  {
    category: "Training",
    tasks: [
      {
        title: "Employee Training Programs",
        emoji: "👩‍🏫",
        description: "Provide comprehensive training programs for your team to ensure they are equipped with the latest skills and knowledge.",
        benefit: "Training helps improve employee performance, boosts morale, and ensures your team can tackle new challenges effectively."
      },
      {
        title: "Leadership Development",
        emoji: "🌱",
        description: "Focus on leadership development by providing managers with the tools they need to inspire and lead their teams successfully.",
        benefit: "Leadership development enhances decision-making, fosters a positive work culture, and prepares your team for the challenges ahead."
      },
      {
        title: "Compliance Training",
        emoji: "📜",
        description: "Offer training to ensure your employees are up to date with relevant industry regulations and compliance standards.",
        benefit: "Compliance training reduces the risk of legal issues and helps ensure your business operates ethically and within the law."
      }
    ]
  }
];

const ctaFeatures = servicesData.map(section => ({
  category: section.category,
  tasks: section.tasks.map(task => task.title)
}));

const SageContent = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
  };

  return (
    <div className="p-6 font-sans leading-relaxed">
      {/* Services Section */}
      {servicesData.map((section) => (
        <div key={section.category} className="mb-10 max-w-7xl m-auto">
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">{section.category}</h2>
          <div className="flex flex-wrap gap-5">
            {section.tasks.map((task, index) => (
              <div key={index} className="flex-1 min-w-[180px] bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">
                  <span role="img" aria-label={task.title}>{task.emoji}</span> {task.title}
                </h3>
                <p className="mb-1 text-sm"><strong>What We Do:</strong> {task.description}</p>
                <p className="text-sm"><strong>How We Help:</strong> {task.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <section className="max-w-7xl m-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg text-center">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Explore Our Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {ctaFeatures.map((feature, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{feature.category}</h3>
        <ul className="list-disc ml-5 text-left text-lg text-gray-700 space-y-3">
          {feature.tasks.map((taskTitle, idx) => (
            <li key={idx} className="transition-colors hover:text-blue-600">{taskTitle}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  <button
    className="mt-8 px-10 py-5 text-xl font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 ease-in-out"
    onClick={handleButtonClick}
  >
    Start With Sage Today
  </button>
</section>



      {/* Embedded iframe Section */}
      {showIframe && (
        <div className="mt-12 relative" style={{ marginBottom: '150px' }}>
          <button
            onClick={handleCloseIframe}
            className="absolute top-0 right-0 p-4 text-white text-xl bg-red-600 rounded-full"
            aria-label="Close iframe"
          >
            ×
          </button>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/6xTXDgD1BhDbkg9vUuzf"
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '900px',
              border: 'none',
              zIndex: 9999,
              overflow: 'hidden',
            }}
            scrolling="no"
            id="6xTXDgD1BhDbkg9vUuzf_1742886240804"
          ></iframe>
          <br />
          <script
            src="https://link.msgsndr.com/js/form_embed.js"
            type="text/javascript"
          ></script>
        </div>
      )}
    </div>
  );
};

export default SageContent;
