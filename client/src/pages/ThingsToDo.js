import React, {useEffect} from "react";

import Header from '../components/nav/Header';
import ThingsToDoHeader from '../components/thingstodo/ThingsToDoHeader';
import ThingsToDoBody from '../components/thingstodo/ThingsToDoBody';

const ThingsToDo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return (
        <>  
            <ThingsToDoHeader />
            <Header />
            <ThingsToDoBody />
        </>
    );
};

export default ThingsToDo;