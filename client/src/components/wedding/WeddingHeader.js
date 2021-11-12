import React from "react";
import {Link} from 'react-router-dom';

const WeddingHeader = () => {
    return(
        <section className="styled__ExperiencesHero-sc-1cnog48-0 eqwEii">
            <h1 className="styled__HeadlineWrapper-sc-1cnog48-1 hokjUz">
            <span style={{color: '#fff'}}>Explore our wonderful</span>
                <picture><img className="wedding-title" src="images/WEDDING EVENTS - Copy.png" alt="wedding event text" title="wedding event text" style={{width:600}} /></picture>
                   
                <Link className="ct-btn-scroll ct-js-btn-scroll scroll-down" to="#section2" style={{paddingTop:0}}><img alt="Arrow Down Icon" src="https://raw.githubusercontent.com/solodev/scroll-down-anchor/master/images/arrow-down-1.png" /></Link>
	
                </h1>
               <picture>
 <img src="images/wedding-event-3.png" alt="wedding venue at Rose Garden, Namchi" title="wedding venue at Rose Garden, Namchi"/></picture>
            </section>
    );
};

export default WeddingHeader;