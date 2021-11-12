import React from "react";

const GardenShopHeader = () => {
    return(
        <section className="styled__ExperiencesHero-sc-1cnog48-0 eqwEii">
               <h1 className="styled__HeadlineWrapper-sc-1cnog48-1 hokjUz">
                  <span style={{color: '#fff'}}>Explore the amazing</span>
                  <picture>
                      <img className="gift-title" 
                      src="images/image-garden-shop-rose-garden-solophok-namchi.png" 
                      style={{width:600, height:250}}
                      alt="image-garden-shop-rose-garden-solophok-namchi" 
                      title="image-garden-shop-rose-garden-solophok-namchi" />
                   </picture>
                   
                   <a className="ct-btn-scroll ct-js-btn-scroll scroll-down" 
                   href="#section2" style={{paddingTop:0}}>
                   <img  alt="Arrow Down Icon" src="https://raw.githubusercontent.com/solodev/scroll-down-anchor/master/images/arrow-down-1.png" /></a>
                    
                   
               </h1>
               <picture><img src="images/view-of-the-garden-shop-in-rose-garden-solophok-namchi-sikkim.jpg" alt="view-of-the-garden-shop-in-rose-garden-solophok-namchi-sikkim" title="view-of-the-garden-shop-in-rose-garden-solophok-namchi-sikkim"/></picture>
            </section>
    );
};

export default GardenShopHeader;