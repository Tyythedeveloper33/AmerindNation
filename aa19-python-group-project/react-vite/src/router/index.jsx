import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomeHeroSection from '../HeroSection/HomeHeroSection';
import AboutHeroSection from '../HeroSection/AboutHeroSection';
import HomeCardSection from '../components/CardSection/HomeCardSection';
import AboutCardSection from '../components/CardSection/AboutCardSection';
import PortfolioHeroSection from '../HeroSection/PortfolioHeroSection';
import PartnersHeroSection from '../HeroSection/PartnersHeroSection';
import PortfolioCardSection from '../components/CardSection/PortfioCardSection';
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

        element:(<div className="pt-20"><PortfolioHeroSection/></div>) ,
      },
      {
        path: "portfolio",
        element: (<div className="pt-20"><PartnersHeroSection /><PortfolioCardSection/></div>),
      },
      {
        path: "services",
        element: (<div className="pt-20"><PartnersHeroSection /></div>),
      },
    ],
  },
]);
