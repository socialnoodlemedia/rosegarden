import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import DjArrowheadHeader from "../components/djarrowhead/DjArrowheadHeader";
import DjArrowheadBody from "../components/djarrowhead/DjArrowheadBody";

const OpenMic = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <DjArrowheadHeader />
            <Header />
            <DjArrowheadBody />
        </>
    );
};

export default OpenMic;