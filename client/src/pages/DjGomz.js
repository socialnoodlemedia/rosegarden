import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import DjGomzHeader from "../components/djgomz/DjGomzHeader";
import DjGomzBody from "../components/djgomz/DjGomzBody";

const DjGomz = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
        <>
            <DjGomzHeader />
            <Header />
            <DjGomzBody />
        </>
    );
};

export default DjGomz;