import React,{useEffect} from "react";

import WhatsOnHeader from '../components/whatson/WhatsOnHeader';
import Header from "../components/nav/Header";
import WhatsOnBody from '../components/whatson/WhatsOnBody';

const WhatsOn = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>  
            <WhatsOnHeader />
            <Header />
            <WhatsOnBody />
        </>
    );
};

export default WhatsOn;