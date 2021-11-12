import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import TheGardenFestivalHeader from "../components/thegardenfestival/TheGardenFestivalHeader";
import TheGardenFestivalBody from "../components/thegardenfestival/TheGardenFestivalBody";

const TheGardenFestival = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <TheGardenFestivalHeader />
            <Header />
            <TheGardenFestivalBody />
        </>
    );
};

export default TheGardenFestival;