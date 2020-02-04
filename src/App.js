import React from 'react';
import MapComponent from './MapComponent';
import ExploreComponent from './Explore';
import WeatherComponent from './Weather';
import ForCouples from './components/itineraryAnimations/ForCouples'
import ForFamilies from './components/itineraryAnimations/ForFamilies'
import ForAdrenalinJunkie from './components/itineraryAnimations/ForAdrenalinJunkie'
import './App.css';

import { HashRouter, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename='/'>
      <main>
          <nav id="menuContainer" className="menuContainer">
            <div className="menu">
              <NavLink to="/">Explore</NavLink>
              <NavLink to="Weather">Weather</NavLink>
              <NavLink to="MapComponent">Map</NavLink>
            </div>
          </nav>
        <Route path="/" exact component={ExploreComponent} />
        <Route path="/Weather" exact component={WeatherComponent} />
        <Route path="/MapComponent" exact component={MapComponent} />
        <Route path="/ForCouples" exact component={ForCouples} />
        <Route path="/ForFamilies" exact component={ForFamilies} />
        <Route path="/ForAdrenalinJunkie" exact component={ForAdrenalinJunkie} />
      </main>

    </HashRouter>
  );
}

export default App;
