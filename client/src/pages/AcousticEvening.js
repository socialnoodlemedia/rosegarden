import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import AcousticEveningHeader from "../components/acousticevening/AcousticEveningHeader";
import AcousticEveningBody from "../components/acousticevening/AcousticEveningBody";

const AcousticEvening = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <AcousticEveningHeader />
            <Header />
            <AcousticEveningBody />
        </>
    );
};

export default AcousticEvening;