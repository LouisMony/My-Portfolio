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



function App() {
  const imageDetails = {
    width: "40vh",
    height: '50vh',
  };

  return (
    <Router>
      <Cursor/>
      <div className="link_cursor" onClick={MenuJs}>
        <Menu_icon />
      </div>
      <Menu/>

      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/project/events'
                render={() => <Project dimension={imageDetails} title="Events" job="WEB DESIGN / UX & UI / FRONT DEVELOPEMENT / BACK DEVELOPEMENT"
                stack="Vuejs / Airtable" time="November 2022 - Marsh 2023" type="School project" banner="/media/elesh_visual.webp"
                />}
              />
               <Route
                exact
                path='/project/music'
                render={() => <Project dimension={imageDetails} title="Music" job="Music Production / Sound Design"
                stack="Fl Studio" time="September 2017" type="Personnal & professionnal project" banner="/media/music_visual.webp"
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
