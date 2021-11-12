import React from "react";

const TheGardenFestivalHeader = () => {
    return(
        <section className="styled__ExperiencesHero-sc-1cnog48-0 eqwEii">
               <h1 className="styled__HeadlineWrapper-sc-1cnog48-1 hokjUz">
                  <span style={{color: '#fff'}}>Feel Free to Explore </span>
                  <picture><img className="garden-fest-text-final" src="images/garden-fest-text-final.png"/></picture>
                   
                   <a className="ct-btn-scroll ct-js-btn-scroll scroll-down" href="#section2" style={{paddingTop:0}}>
                       <img  alt="Arrow Down Icon" src="https://raw.githubusercontent.com/solodev/scroll-down-anchor/master/images/arrow-down-1.png" />
                   </a>
                   
               </h1>
               <picture><img src="images/garden-fest-banner.jpg" /></picture>
            </section>
    );

};

export default TheGardenFestivalHeader;