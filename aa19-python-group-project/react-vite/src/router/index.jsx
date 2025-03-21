import { createBrowserRouter } from 'react-router-dom';
// import LoginFormPage from '../components/LoginFormPage';
// import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomeHeroSection from '../HeroSection/HomeHeroSection';
import AboutHeroSection from '../HeroSection/AboutHeroSection';
import HomeCardSection from '../components/CardSection/HomeCardSection';
import AboutCardSection from '../components/CardSection/AboutCardSection';
// import PortfolioHeroSection from '../HeroSection/PortfolioHeroSection';
import PartnersHeroSection from '../HeroSection/PartnersHeroSection';
import PortfolioCardSection from '../components/CardSection/PortfioCardSection';
import ServicesCardSection from '../components/CardSection/ServicesCardSection';
import DashboardUI from '../components/DashBoard/DashboardUI';
import PartnersCardSection from '../components/CardSection/PartnersCardSection';
import IdeaSubmissionSection from '../components/IdeaSubmission';
import SageContent from '../components/SageContent';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <div className="pt-20">
              <HomeHeroSection />
              <HomeCardSection />
            </div>
          </>
        ),
      },
      {
        path: "about",
        element: (
          <div className="pt-20">
            <AboutHeroSection />
            <AboutCardSection/>
          </div>
        ),
      },
      {
        path: "partners",

        element:(<div className="pt-20"><PartnersHeroSection/><PartnersCardSection/></div>) ,
      },
      {
        path: "portfolio",
        element: (<div className="pt-20"><PartnersHeroSection /><PortfolioCardSection/><IdeaSubmissionSection/></div>),
      },
      {
        path: "services",
        element: (<div className="pt-20"><PartnersHeroSection /><ServicesCardSection/></div>),
      },
      {
        path: "dashboard",
        element: (<div className="pt-20"><DashboardUI/></div>),
      },
      {
        path: "sage",
        element: (<div className="pt-20"><PartnersHeroSection/><SageContent/></div>),
      },
      {
        path: "privacy",
        element: (<div className="pt-20"><Privacy/></div>),
      },
      {
        path: "terms",
        element: (<div className="pt-20"><Terms/></div>),
      },
    ],
  },
]);
