import React, {useEffect} from 'react';
import HomeAbout from '../components/home/HomeAbout';
import HomeTheGarden from '../components/home/HomeTheGarden';
import HomeWedding from '../components/home/HomeWedding';
import HomeThingsToDo from '../components/home/HomeThingsToDo';
import HomeMapContact from '../components/home/HomeMapContact';
import Header from '../components/nav/Header';
import HomeHeader from '../components/home/HomeHeader';


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>  

            <HomeHeader />
            <Header />
            <HomeAbout />
            <HomeTheGarden />
            <HomeWedding />
            <HomeThingsToDo />
            <HomeMapContact />
        </>
    );
};

export default Home;