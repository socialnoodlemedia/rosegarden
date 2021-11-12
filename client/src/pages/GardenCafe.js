import React, {useEffect} from "react";

import Header from '../components/nav/Header';
import GardenCafeHeader from '../components/gardencafe/GardenCafeHeader';
import GardenCafeBody from '../components/gardencafe/GardenCafeBody';

const GardenCafe = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <GardenCafeHeader />
            <Header />
            <GardenCafeBody />

        </>
    );
};

export default GardenCafe;