import React, {useEffect} from "react";
import Header from "../components/nav/Header";
import PrivacyPolicyBody from "../components/privacypolicy/PrivacyPolicyBody";

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <Header />
            <PrivacyPolicyBody />
        </>
    );
};

export default PrivacyPolicy;