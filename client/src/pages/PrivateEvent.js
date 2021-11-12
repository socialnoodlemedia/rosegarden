import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import PrivateEventHeader from "../components/privateevent/PrivateEventHeader";
import PrivateEventBody from "../components/privateevent/PrivateEventBody";

const PrivateEvent = () => {

    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);

    return(
        <>
            <PrivateEventHeader />
            <Header />
            <PrivateEventBody />
        </>
    );
};

export default PrivateEvent;