import React, {useEffect} from 'react';

import GardenRestaurantBody from '../components/gardenrestaurant/GardenRestaurantBody';
import GardenRestaurantGallery from '../components/gardenrestaurant/GardenRestaurantGallery';
import Header from '../components/nav/Header';
import GardenRestaurantHeader from '../components/gardenrestaurant/GardenRestaurantHeader';

const GardenRestaurant = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <GardenRestaurantHeader />
            <Header />
            <GardenRestaurantBody />
            <GardenRestaurantGallery />
        </>
    );
};

export default GardenRestaurant;