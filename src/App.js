import BannerPrincipal from "./components/Banner";
import "./theme.css";
import { ThemeProvider } from "@mui/material";
import PorQueKamaleont from "./components/PorQueKamaleont";
import BoxSection from "./components/BoxSection";
import Activos from "./components/Activos";
import Inversiones from "./components/Inversiones";
import Roadmap from "./components/Roadmap";
import QuestionAnswer from "./components/QuestionsAndAnswers";
import SocialCommunity from "./components/SocialCommunity";
import Footer from "./components/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Co_Fundadores from "./components/Co_Fundadores";
import Team from "./components/Team";
import Advisord from "./components/Advisord";
import Partners from "./components/Partners";
import PorqueKilt from "./components/PorqueKilt";
import OurSolution from "./components/OurSolution";
import MarketOverView from "./components/MarketOverView";
import Adventages from "./components/Adventages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InvestmentMaturity from "./components/InvestmentMaturity";
import InvestmentFramework from "./components/InvestmentFramework";
import IndustryPriority from "./components/IndustryPriority";
import KamaleontPorFolio from "./components/KamaleontPorFolio";
import Priority from "./components/Priority";

let ancla = "";
const PAGE_ABOUT = "/aboutus";
const PAGE_WHYKLT = "/whyklt";
const PAGE_HOME = "/";
const PAGE_INVEST = "/howtoinvest";

function App() {
  const location = useLocation();
  const navegate = useNavigate();

  const LinkMenu = [
    {
      page: PAGE_ABOUT,
      title: " About us",
      active: location.pathname === PAGE_ABOUT,
      redired: null,
    },
    {
      page: PAGE_WHYKLT,
      title: "Why KLT?",
      active: location.pathname === PAGE_WHYKLT,
      redired: null,
    },
    {
      page: PAGE_HOME,
      title: "KLT",
      active: false,
      redired: "home/Activos",
    },
    {
      page: PAGE_HOME,
      title: "Investments",
      active: false,
      redired: "home/Inversiones",
    },
    {
      page: PAGE_HOME,
      // title: "Doc. Al Inv.",
      active: false,
      redired: "home/Inversiones",
    },
    {
      page: PAGE_INVEST,
      // title: "How to invest?",
      active: location.pathname === PAGE_INVEST,
      redired: false,
    },
    {
      page: PAGE_HOME,
      title: "Contact & FAQ",
      active: false,
      redired: "home/QuestionAnswer",
    },
  ];

  function redirecionar(page, scroll, position = "start") {
    if (page === PAGE_ABOUT) {
      if (location.pathname === PAGE_ABOUT) {
        console.log(scroll);
        let element = document.getElementById(scroll);
        if (element) {
          element.scrollIntoView({ block: position, behavior: "smooth" });
        }
      } else {
        navegate(PAGE_ABOUT);
        ancla = scroll;
      }
    }

    if (page === PAGE_WHYKLT) {
      if (location.pathname === PAGE_WHYKLT) {
        console.log(scroll);
        let element = document.getElementById(scroll);
        if (element) {
          element.scrollIntoView({ block: position, behavior: "smooth" });
        }
      } else {
        navegate(PAGE_WHYKLT);
        ancla = scroll;
      }
    }

    if (page === PAGE_INVEST) {
      if (location.pathname === PAGE_INVEST) {
        console.log(scroll);
        let element = document.getElementById(scroll);
        if (element) {
          // console.log("ahhhhhhh")
          element.scrollIntoView({ block: "top", behavior: "smooth" });
        }
      } else {
        navegate(PAGE_INVEST);
        ancla = scroll;
      }
    }

    if (page === PAGE_HOME) {
      if (location.pathname === PAGE_HOME) {
        console.log(scroll);
        let element = document.getElementById(scroll);
        if (element) {
          element.scrollIntoView({ block: position, behavior: "smooth" });
        }
      } else {
        navegate(PAGE_HOME);
        ancla = scroll;
      }
    }
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    console.log("useEfect", ancla);
    if (ancla) {
      console.log("ancla");
      let element = document.getElementById(ancla);
      if (element) {
        console.log("entrando desde afuera");
        setTimeout(
          () => element.scrollIntoView({ block: "start", behavior: "smooth" }),
          250
        );
      }
    }
  }, [location.pathname]);

  return (
    <>
      <BannerPrincipal
        id="banner"
        LinkMenu={LinkMenu}
        redirecionar={redirecionar}
        location={location}
        PAGE_HOME={PAGE_HOME}
        PAGE_ABOUT={PAGE_ABOUT}
        PAGE_WHYKLT={PAGE_WHYKLT}
        PAGE_INVEST={PAGE_INVEST}
      />
      <Routes>
        <Route
          path="/"
          element={
            <BoxSection>
              <PorQueKamaleont
                id={"home/PorQueKamaleont"}
                PAGE_WHYKLT={PAGE_WHYKLT}
                redirecionar={redirecionar}
              />
              <Activos id={"home/Activos"} />
              <Inversiones
                id={"home/Inversiones"}
                redirecionar={redirecionar}
                PAGE_INVEST={PAGE_INVEST}
              />
              <Roadmap id={"home/roadmap"} />
              <QuestionAnswer id={"home/QuestionAnswer"} />
              <SocialCommunity id={"home/SocialCommunity"} />
            </BoxSection>
          }
        />
        <Route
          path="/aboutus"
          element={
            <BoxSection>
              {/* <Co_Fundadores id="conocenos/Co_Fundadores" /> */}
              <Team id="conocenos/Team" />
              <Advisord id="conocenos/Advisord" />
              <Partners />
              <SocialCommunity id="conocenos/SocialCommunity" />
            </BoxSection>
          }
        />
        <Route
          path="/whyklt"
          element={
            <BoxSection>
              <PorqueKilt id="porquekilt/descripcion" />
              <OurSolution id="porquekilt/OurSolution" />
              <MarketOverView id="porquekilt/MarketOverView" />
              <Adventages id="porquekilt/Adventages" />
              <SocialCommunity id="porquekilt/SocialCommunity" />
            </BoxSection>
          }
        />
        <Route
          path="/howtoinvest"
          element={
            <BoxSection>
              <InvestmentFramework id="/howtoinvest/InvestmentFramework" />
              <InvestmentMaturity id="/howtoinvest/InvestmentMaturity" />
              <IndustryPriority id="/howtoinvest/IndustryPriority" />
              <KamaleontPorFolio id="/howtoinvest/KamaleontPorFolio" />
              <Priority id="/howtoinvest/Priority" />
              <SocialCommunity id="conocenos/SocialCommunity" />
            </BoxSection>
          }
        />
      </Routes>
      <Footer
        LinkMenu={LinkMenu}
        redirecionar={redirecionar}
        location={location}
        PAGE_HOME={PAGE_HOME}
        PAGE_ABOUT={PAGE_ABOUT}
        PAGE_WHYKLT={PAGE_WHYKLT}
        PAGE_INVEST={PAGE_INVEST}
      />
    </>
  );
}

export default App;
