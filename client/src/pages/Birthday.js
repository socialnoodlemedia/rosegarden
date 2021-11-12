import React, {useEffect} from "react";
import Header from '../components/nav/Header';
import BirthdayHeader from "../components/birthday/BirthdayHeader";
import BirthdayBody from "../components/birthday/BirthdayBody";

const Birthday = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return(
        <>
            <BirthdayHeader />
            <Header />
            <BirthdayBody />
        </>
    );
};

export default Birthday;