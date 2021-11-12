import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import TheGardenHeader from "../components/thegarden/TheGardenHeader";
import TheGardenBody from "../components/thegarden/TheGardenBody";


const TheGarden = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <TheGardenHeader />
            <Header />
            <TheGardenBody />
        </>
    );
};

export default TheGarden;