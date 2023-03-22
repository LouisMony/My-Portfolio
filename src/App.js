import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import Project from "./pages/project";
//components
import Menu_icon from "./components/Menu_icon";
import Menu from "./components/Menu"
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
      <div onClick={MenuJs}>
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
                stack="Vuejs / Airtable" time="Novembre 2022 - Mars 2023" type="School project" banner="/media/elesh_visual.png"
                />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
