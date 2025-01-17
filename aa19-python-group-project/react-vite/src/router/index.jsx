import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomeHeroSection from '../HeroSection/HomeHeroSection';
import AboutHeroSection from '../HeroSection/AboutHeroSection';
import HomeCardSection from '../components/CardSection/HomeCardSection';
import AboutCardSection from '../components/CardSection/AboutCardSection';
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
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
    ],
  },
]);
