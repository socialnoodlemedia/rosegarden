import React, {useEffect} from 'react';
import Header from '../components/nav/Header';
import WeddingHeader from '../components/wedding/WeddingHeader';
import WeddingBody from '../components/wedding/WeddingBody';

const Wedding = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>  
            <WeddingHeader />
            <Header />
            <WeddingBody />
        </>
    );
};

export default Wedding;