import React from "react";
import {Link} from "react-router-dom";

const HomeWedding = () => {
    return (
        

<div className="styled__EditorialWithRevealingOverlay-sc-1wt9a9d-0 cfdVMg" >

     <div className="styled__Spacer-sc-1fglqa0-0 jXQNis"></div>
     <article className="styled__HeadlineLarge-sc-15i8qxt-0 dmtNSE" style={{zIndex:1111}} >
        <h3 color="dark" className="styled__Headline-sc-15i8qxt-1 styled__HeadlineComplex-sc-15i8qxt-3 bFLBMO cVseuW"style={{color:'#422512 !important'}}><span>Discover</span><span>Our</span><span>Outstanding</span><span>Weddings</span></h3>
     </article>
     <div className="styled__Spacer-sc-1fglqa0-0 jXQNis"></div>
     <article className="styled__BodyWrapper-sc-1wt9a9d-1 kVwwbK" >
         
          
         <div style={{position:'relative'}} >
        <div className="styled__ImageWrapper-sc-1wt9a9d-4 ckpkmA new-wedding-imgwrapper" >
            
       
           <div className="wedding-rose">
              <img src="images/cherry blossom.png" className="new-wedding-rose-img" alt="cherry blossom" />
           </div>
           <picture >
              <source media="(max-width: 414px)" srcSet="images/wedding1.jpg?rect=320,0,1280,1280&amp;w=500&amp;h=500&amp;auto=format"/>
              <img alt="Women pouring champagne into glass" src="images/wedding1.jpg?rect=320,0,1280,1280&amp;w=800&amp;h=800&amp;auto=format"/>
           </picture>
            
            
            
           
        </div>
        </div>
         
        <div className="styled__OverlayWrapper-sc-1wt9a9d-2 bmFbtL">
           
        </div>
        <div className="styled__BodyTextWrapper-sc-1wt9a9d-5 rYvou" >
           <p color="dark" width="fullWidth" className="styled__BodyText-sc-1cy59ri-0 fOmTqv new-wedding-para-text" >Looking for the perfect venue for your special day? Where better to celebrate your marriage than in one of the best garden restaurants in Sikkim.
</p>
        </div>
         
         
        <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
           <div className="styled__LinkModule-sc-5dbaax-2 izBTOQ new-wedding-button" >
              <Link to="/wedding" >
                 <span style={{color:'#422512'}}>Explore More</span>
                  <div className="styled__Arrow-sc-5dbaax-1 gSFvVS" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" stroke-linecap="square">
                       <g>
                          <path d="M25 7H1M19.3 13l6-6-6-6"></path>
                       </g>
                    </svg>
                 </div>
              </Link>
             <div className="styled__Background-sc-5dbaax-0 iuAPkd new-wedding-background" ></div>
           </div>
     <div className="styled__Spacer-sc-1fglqa0-0 jXQNis"></div>
  </article>
  </div>

    );
};

export default HomeWedding;