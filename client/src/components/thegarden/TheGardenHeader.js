import React from "react";

const TheGardenHeader = () => {
    return(
        <section className="styled__ExperiencesHero-sc-1cnog48-0 eqwEii">
               <h1 className="styled__HeadlineWrapper-sc-1cnog48-1 hokjUz">
                  <span style={{color: '#fff'}}>Feel Free to Explore </span>
                  <picture><img className="garden-text" style={{width:600, height:250}} src="images/the garden-text.png" alt="the garden - Rose Garden Solophok, Namchi"  title="The Garden - Rose Garden Solophok, Namchi"/></picture>
                   
                   <a className="ct-btn-scroll ct-js-btn-scroll scroll-down" href="#section2" 
                   style={{paddingTop:0}}>
                       <img  alt="Arrow Down Icon" src="https://raw.githubusercontent.com/solodev/scroll-down-anchor/master/images/arrow-down-1.png" /></a>
                   
               </h1>
               <picture><img src="images/Garden-page.jpg" /></picture>
            </section>
    );
};

export default TheGardenHeader;