
// import DashboardNavbar from "./DashboardNavbar";

const DashboardUI = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      {/* <DashboardNavbar /> */}

      {/* Dashboard Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-700">
          This is where you can manage all aspects of your account. Use the
          navigation bar above to access different sections.
        </p>
        <div className="mt-8">
          {/* Placeholder for additional components */}
          <div className="bg-white p-4 rounded shadow">
            <p>Additional dashboard widgets or content go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
