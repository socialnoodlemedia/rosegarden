import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import GardenShopHeader from "../components/gardenshop/GardenShopHeader";
import GardenShopBody from "../components/gardenshop/GardenShopBody";

const GardenShop = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <GardenShopHeader />
            <Header />
            <GardenShopBody />
        </>
    );
};

export default GardenShop;