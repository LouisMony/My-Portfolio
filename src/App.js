import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import Project from "./pages/project";
import Contact from "./pages/ContactPage"
import About from "./pages/AboutPage"
//components
import Menu_icon from "./components/Menu_icon";
import Menu from "./components/Menu"
import Cursor from "./components/cursor";
//Styles
import "./App.scss";
import "./index.scss";
//JS
import MenuJs from './js/MenuAnimation';
import ScrollToTop from "./js/scrollToTop";



function App() {
  const imageDetails = {
    width: "40vh",
    height: '50vh',
  };

  return (
    <Router>
      <ScrollToTop />
      <Cursor/>
      <div className="link_cursor" onClick={MenuJs}>
        <Menu_icon />
      </div>
      <Menu/>

      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' render={() => <Home imageDetails={imageDetails} />}/>
              <Route
                exact
                path='/project/events'
                render={() => <Project dimension={imageDetails} title="Events" job="WEB DESIGN / UX & UI / FRONT DEVELOPEMENT / BACK DEVELOPEMENT"
                stack="Vuejs / Airtable" time="November 2022 - Marsh 2023" type="School project" banner="/media/elesh_visual.webp" endCTA="Discover Event" endLink="#" introText='Welcome to the "Event" application designed to simplify the planning of events in board and card game stores, you can say goodbye to paper lists and disorganization.  Event allows store managers to manage and plan their events with ease while allowing their customers to register directly via their cell phone, to register in the queue, to cancel etc...' firstVisual="/media/content/Event_MockUp.webp"
                />}
              />
               <Route
                exact
                path='/project/music'
                render={() => <Project dimension={imageDetails} title="Music" job="Music Production / Sound Design"
                stack="Fl Studio" time="September 2017" type="Personnal & professionnal project" banner="/media/music_visual.webp" endCTA="Listen to my music" endLink="https://soundcloud.com/user-937117132" introText="I have been producing music on the computer for over 6 years and publishing my work through various platforms such as SoundCloud, Deezer, etc. My compositions are mainly rap instrumentals, electronic and lo-fi. In 2021, I completed a project titled 'Little Boy' and with each new piece, I strive to create my own musical universe." secondText="In a professional setting, I have had the opportunity to work on projects for the Hyundai brand, including sound design for Instagram reels. Such projects are very rewarding and have allowed me to develop new technical skills."
                />}
              />
              <Route
                exact
                path='/project/aides'
                render={() => <Project dimension={imageDetails} title="Aides" job="FRONT DEVELOPEMENT"
                stack="VueJs/AstroJs" time="OCTOBER 2022 - NOVEMBER 2022" type="Professionnal project" banner="/media/aides_visual.webp" endCTA="Visit Website" endLink="https://don.aides.org/" firstVisual="/media/content/aides_MockUp.webp" introText="Discover the website of the new campaign by AIDES. Through the site, learn about the journeys of some of the activists involved in the fight against HIV and viral hepatitis. The website has been professionally designed to provide an optimal user experience across all devices. The creation of this website and the new advertising campaign was carried out by a dedicated team with rigor and commitment. Join the fight against HIV and viral hepatitis by making a donation at https://soutenir.aides.org."
                />}
              />
              <Route
                exact
                path='/project/kia-osb'
                render={() => <Project dimension={imageDetails} title="Kia Osb" job="FRONT & Back DEVELOPEMENT"
                stack="VueJs/AstroJs" time="December 2022 - April 2023" type="Professionnal project" banner="/media/kia_visual.webp" endCTA="Visit Website" endLink="https://www.kia.com/fr/service/osb/" firstVisual="/media/content/Kia_mockUp.webp" introText="Kia OSB (Online Service Booking) is an innovative tool for scheduling appointments at KIA dealerships. This solution allows KIA vehicle owners to easily plan the necessary technical operations, select their preferred dealership, and choose a time slot that suits them. This solution reflects a high level of technical expertise and a strong command of web development technologies." secondText="To realize this project, many technologies were needed. The project is developed on AstroJs with Vue components allowing a maximum fluidity. Many APIs are also used for the map, the calendar, the registrations etc.."
                />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
      <Route exact path='/contact' render={() => <Contact/>}/>
      <Route exact path='/about-me' render={() => <About/>}/>
      
    </Router>
  );
}

export default App;
