import React from "react";
import {Link} from "react-router-dom";

const HomeAbout = () => {

    return(

<section data-toggle-class-on-scroll-screen-offset="1" 
data-toggle-class-on-scroll-rem-before="is-visible" 
data-toggle-class-on-scroll-add-after="is-visible" 
className="padding-horizontal-gutter-small padding-horizontal-gutter-from-xs 
max-width-site margin-horizontal-auto margin-bottom-largest margin-bottom-mega-from-xs 
text-center relative padding-vertical-mega transition-module-default js-auto-toggle-class-on-scroll 
is-visible home-about-sec" >
                
    <div className="absolute fill max-width-body margin-horizontal-auto overflow-hidden" style={{zIndex:11}} >
                  <div className="width-larger anim-leaf absolute top bottom anim-leaf-1 left-1_6 translate-x-minus-1_2" style={{zIndex:11}}>
                     <div className="anim-leaf-wrapper"><img className="anim-leaf-img width-full block" src="https://riviera1920.com/workspace/assets/img/leaf.png" alt="animated falling leaf 1" style={{zIndex:11}} /></div>
                  </div>
                  <div className="width-larger anim-leaf absolute top bottom anim-leaf-2 left-1_2 translate-x-minus-1_2">
                     <div className="anim-leaf-wrapper"><img className="anim-leaf-img width-full block" src="https://riviera1920.com/workspace/assets/img/leaf.png" alt="animated falling leaf 1" style={{zIndex:11}} /></div>
                  </div>
                  <div className="width-larger anim-leaf absolute top bottom anim-leaf-3 left-5_6 translate-x-minus-1_2">
                     <div className="anim-leaf-wrapper"><img className="anim-leaf-img width-full block" src="https://riviera1920.com/workspace/assets/img/leaf.png" alt="animated falling leaf 1" style={{zIndex:11}} /></div>
                  </div>
                  <div className="absolute left right height-larger bg-color-white z-index-11 top custom-leaves-top-mask top-leaf" ></div>
                  <div className="absolute left right height-larger bg-color-white z-index-11 bottom custom-leaves-bottom-mask"></div>
               </div>
                        
                        
                   <div className="ver-rose ver-rose-hide ver-rose-1" >
                            <img src="images/image-of-pink-rose.png" className="ver-rose-img-1" alt="pink-rose-image" title="pinnk-rose"  />
                   </div>
                        
                        <div class="ver-rose roseetwo ver-rose-2" >
                            <img src="images/image-of-queen-of-sweden.png" className="ver-rose-img-2" alt="image-of-queen-of-sweden"  title="image-of-queen-of-sweden" />
                           </div>
        
                       <article className="styled__EditorialWithRevealingColumns-sc-9us5nv-0 dMoQmK tab-about-para new-about-para">  
        
                          
                               
                           
                         
                          <div className="styled__Illustration-sc-9us5nv-1 fNjVsY head1">
                              <h1 className="new-head1-text">Rose Garden</h1>
                          </div>
                          <p className="styled__Subtitle-sc-9us5nv-2 qZzTL head2 new-head2-text" >A little piece of Heaven</p>
                          <div className="styled__BodyTextWrapper-sc-9us5nv-3 jEpgPU head3" style={{zIndex:111}}>
                             <p color="red" width="fullWidth" className="styled__BodyText-sc-1cy59ri-0 eFKdQU new-head3-text" >Widely recognised as the most beautiful Garden in Sikkim, perched at the top of the mountains,  features three separate experiences; the garden, the garden restaurant and the garden shop.
                                Inspired by David Austin's garden; <a href="http://rosegardensikkim.com/thegardennew.php" className="new-head3-link" >Rose Garden, Solophok</a> is surrounded by lush gardens, hoping to  create a heaven of calm, somewhere that respects and is in tune with nature.
                             </p>
        
                             <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
                                <div className="styled__LinkModule-sc-5dbaax-2 izBTOQ new-about-button" >
                                   <Link to="/thegarden" >
                                      <span style={{color:'#422512'}}>Explore More</span>
                                       <div className="styled__Arrow-sc-5dbaax-1 gSFvVS">
                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                            <g>
                                               <path d="M25 7H1M19.3 13l6-6-6-6"></path>
                                            </g>
                                         </svg>
                                      </div>
                                   </Link>
                                  <div className="styled__Background-sc-5dbaax-0 iuAPkd new-background" ></div>
                                </div>
                              
                          </div>
                           
                           
                   
        
                               
                        
                          <div className="styled__Spacer-sc-1fglqa0-0 cEkSzm"></div>
                          <div className="styled__Columns-sc-9us5nv-4 fttwVs">
        
                              
                              
                              
                              
                              
                          </div>
        
                           
                           
        
                       </article>
                        
                     </section>






    );

};

export default HomeAbout;