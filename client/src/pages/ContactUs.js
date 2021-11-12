import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import ContactusHeader from "../components/contactus/ContactusHeader";
import ContactusBody from "../components/contactus/ContactusBody";
import HomeMapContact from "../components/home/HomeMapContact";

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return(
        <>
            <ContactusHeader />
            <Header />
            <ContactusBody />
            <HomeMapContact />
        </>
    );
};

export default ContactUs;