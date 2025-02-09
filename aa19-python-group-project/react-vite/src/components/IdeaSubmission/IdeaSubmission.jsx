

const IdeaSubmissionSection = () => {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Got an idea for another project we should pursue?
        </h2>

        {/* Section Description */}
        <p className="mt-4 text-xl text-gray-700 max-w-2xl">
          We’re focusing on helping underserved rural and Tribal organizations with accessing guaranteed funding and support. Let’s work together to develop impactful solutions for our communities.
        </p>

        {/* Schedule Button */}
        <a
          href="https://calendly.com" // Replace with your Calendly link
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#264F51] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#2F6368] transition duration-300"
        >
          Schedule a time with us
        </a>
      </div>
    </div>
  );
};

export default IdeaSubmissionSection;
