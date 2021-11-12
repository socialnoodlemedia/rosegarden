import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import GardenRestaurant from "./pages/GardenRestaurant";
import GardenCafe from "./pages/GardenCafe";
import ThingsToDo from "./pages/ThingsToDo";
import WhatsOn from './pages/WhatsOn';
import AcousticEvening from './pages/AcousticEvening';
import DjGomz from './pages/DjGomz';
import OpenMic from './pages/OpenMic';
import DjArrowhead from './pages/DjArrowhead';
import TheGardenFestival from './pages/TheGardenFestival';
import Wedding from './pages/Wedding';
import Birthday from './pages/Birthday';
import PrivateEvent from './pages/PrivateEvent';
import GardenShop from './pages/GardenShop';
import TheGarden from './pages/TheGarden';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';


import Footer from './components/nav/Footer';

const App = () => {
  return (
   
    <>
    <div id="__next">
      <main >
      {/* {window.location.href === 'http://localhost:3000/' ? <HomeHeader /> : "" } */}
      {/* {window.location.href === 'http://localhost:3000/gardenrestaurant' ? <GardenRestaurantHeader /> : "" }
         */}
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gardenrestaurant" component={GardenRestaurant} />
        <Route exact path="/gardencafe" component={GardenCafe} />
        <Route exact path="/things-to-do" component={ThingsToDo} />
        <Route exact path="/whats-on" component={WhatsOn} />
        <Route exact path="/acoustic-evening" component={AcousticEvening} />
        <Route exact path="/dj-gomz" component={DjGomz} />
        <Route exact path="/open-mic" component={OpenMic} />
        <Route exact path="/dj-arrowhead" component={DjArrowhead} />
        <Route exact path="/the-garden-festival" component={TheGardenFestival} />
        <Route exact path="/wedding" component={Wedding} />
        <Route exact path="/birthday" component={Birthday} />
        <Route exact path="/private-event" component={PrivateEvent} />
        <Route exact path="/garden-shop" component={GardenShop} />
        <Route exact path="/thegarden" component={TheGarden} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
