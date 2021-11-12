import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import OpenMicHeader from "../components/openmic/OpenMicHeader";
import OpenMicBody from "../components/openmic/OpenMicBody";

const OpenMic = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <OpenMicHeader />
            <Header />
            <OpenMicBody />
        </>
    );
};

export default OpenMic;