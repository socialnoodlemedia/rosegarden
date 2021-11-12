import React from "react";
import "../../Home.css";

const HomeHeader = () => {
    return(
        <section className="styled__HeroWithLogoEmblem-sc-1l97kid-0 CmnnC">
               <div className="styled__LogoEmblem-sc-1l97kid-4 bBPrYa" >

                </div>
               
                  <div className="styled__Image-sc-1l97kid-3 fJSbOS">
                  <picture>
                        <source media="(max-width: 1280px)" srcSet="images/rose-garden-solophok-namchi2.jpg?w=1536&amp;auto=format"/>
                        <source media="(max-width: 1024px)" srcSet="images/rose-garden-solophok-namchi2.jpg?w=1230&amp;auto=format"/>
                        <source media="(max-width: 768px)" srcSet="images/rose-garden-solophok-namchi2.jpg?w=920&amp;auto=format"/>
                        <source media="(max-width: 414px)" srcSet="images/rose-garden-solophok-namchi2.jpg?w=500&amp;auto=format"/>
                        <img alt="Rose Garden, Solophok  - Namchi, Sikkim"  title="Rose Garden, Solophok  - Namchi, Sikkim" src="images/rose-garden-solophok-namchi2.jpg?w=1600&amp;auto=format" />
                   </picture>
                   
                  </div>
            </section>
    );
};

export default HomeHeader;