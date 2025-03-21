import React from 'react';

const servicesData = [
  {
    category: "Preservation",
    tasks: [
      {
        title: "Program Dashboard",
        description: "Get your team into amerindnation.com to access all tasks, documents, and systems—complete with deadlines and smart automations.",
        benefit: "This centralized dashboard streamlines your operations, ensuring your business stays organized and on track for growth."
      },
      {
        title: "CRM & Website",
        description: "Guide your client to https://app.pre.world to set up a sleek website, robust CRM automations, social media integrations, contracts, and payments.",
        benefit: "Establishing a professional digital presence and seamless CRM system boosts client engagement and builds trust."
      },
      {
        title: "Digitization",
        description: "Assist in collecting and scanning key organizational and founder documents into Pre accounts—with the option to mail a welcome packet that includes a scanner.",
        benefit: "Digitizing your documents ensures secure, easily accessible records and streamlines your administrative processes."
      },
      {
        title: "Enhancement",
        description: "Review personal and organizational collections using AI insights and provide a comprehensive organizational documents checklist.",
        benefit: "Enhancing your documentation process uncovers growth opportunities and empowers your team with actionable insights."
      }
    ]
  },
  {
    category: "Accounting",
    tasks: [
      {
        title: "Reporting",
        description: "Provide comprehensive accounting support to ensure accurate financial tracking.",
        benefit: "Clear reporting gives you real-time insight into your financial performance, enabling informed strategic decisions."
      },
      {
        title: "Bookkeeping",
        description: "Maintain timely and precise bookkeeping to keep your financial records up-to-date.",
        benefit: "Reliable bookkeeping lays the foundation for fiscal responsibility and long-term financial health."
      },
      {
        title: "Tax Strategy",
        description: "Develop tax planning strategies to optimize your fiscal position and minimize liabilities.",
        benefit: "A solid tax strategy helps you keep more of your earnings while positioning your business for sustainable growth."
      },
      {
        title: "Budget Planning",
        description: "Assist in creating a sustainable budget and forecast future financial trends.",
        benefit: "Effective budgeting ensures resources are allocated wisely and supports your business's strategic goals."
      }
    ]
  },
  {
    category: "Digital",
    tasks: [
      {
        title: "Branding",
        description: "Enhance and refine your brand identity—including your website, domain, and company emails—to reflect the spirit of Amerind Sage.",
        benefit: "A strong brand identity elevates your business, builds lasting trust, and differentiates you in a competitive market."
      },
      {
        title: "Social",
        description: "Develop a dynamic social media strategy that boosts your online presence and integrates campaigns into your CRM.",
        benefit: "An engaging social media strategy increases visibility and drives meaningful interactions with your audience."
      },
      {
        title: "Operations",
        description: "Optimize your digital operations and workflows for maximum efficiency.",
        benefit: "Streamlined operations reduce waste and enhance productivity, allowing you to focus on strategic growth."
      },
      {
        title: "Dashboards",
        description: "Create real-time operational dashboards that provide key business insights.",
        benefit: "Instant access to performance data empowers you to make agile, data-driven decisions."
      }
    ]
  },
  {
    category: "Capacity",
    tasks: [
      {
        title: "Business Plan",
        description: "Develop a comprehensive business plan that outlines your strategy and growth trajectory.",
        benefit: "A well-crafted business plan acts as a roadmap for success, aligning your team and attracting investment."
      },
      {
        title: "Product Roadmap",
        description: "Create a clear product roadmap that guides future development and innovation.",
        benefit: "This service ensures your product development aligns with market demands and long-term vision."
      },
      {
        title: "Strategic Partners",
        description: "Identify and engage with strategic partners to expand your business capacity.",
        benefit: "Building the right partnerships opens up new market opportunities and accelerates growth."
      },
      {
        title: "Exit Strategy",
        description: "Plan an exit strategy that maximizes long-term value for your business.",
        benefit: "An effective exit strategy secures your legacy and ensures you achieve the best possible outcome when transitioning."
      }
    ]
  },
  {
    category: "Fundability",
    tasks: [
      {
        title: "Personal Credit",
        description: "Improve the personal credit profile of business owners to unlock better financing opportunities.",
        benefit: "Strengthening personal credit can enhance your financing options, helping you access capital at more favorable terms."
      },
      {
        title: "Business Credit",
        description: "Enhance your business credit profile to improve fundability and attract investment.",
        benefit: "A robust business credit score increases your chances of securing loans and growing your company."
      },
      {
        title: "Grants & Contracts",
        description: "Identify and secure grants and contracts to support your business growth initiatives.",
        benefit: "Leveraging external funding sources provides a critical boost to your growth without diluting equity."
      },
      {
        title: "Equity Investing",
        description: "Provide expert guidance on equity investing to fuel your expansion plans.",
        benefit: "Strategic equity investments can inject capital into your business, enabling scalable growth and innovation."
      }
    ]
  }
];

const SageContent = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Amerind Sage Services</h1>
      {servicesData.map((section) => (
        <div key={section.category} style={{ marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>{section.category}</h2>
          {section.tasks.map((task, index) => (
            <div key={index} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
              <h3 style={{ margin: '0 0 10px' }}>{task.title}</h3>
              <p style={{ margin: '0 0 5px' }}><strong>Description:</strong> {task.description}</p>
              <p style={{ margin: '0' }}><strong>Benefit:</strong> {task.benefit}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SageContent;
