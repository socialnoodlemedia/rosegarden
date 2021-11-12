import React from "react";
import {Link} from "react-router-dom";

const HomeThingsToDo = () => {
    return(
        
        <section className="styled__TwoUpImageWithContent-sc-287lhv-0 cgazkp new-thingstodo-section">
   
        <div className="styled__Column-sc-287lhv-1 kwTljX new-thingstodo-column">
           <article className="styled__ColumnBody-sc-287lhv-3 pSRTZ" style={{color:'#422512'}} >
              <article className="styled__HeadlineLarge-sc-15i8qxt-0 dmtNSE" >
                 <h1 color="red" className="styled__Headline-sc-15i8qxt-1 styled__HeadlineSimple-sc-15i8qxt-2 cqNxgl ezSTPR" style={{color:'#422512'}}><span >Things to do</span><span></span></h1>
              </article>
              <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
              <div className="styled__IllustrationWrapper-sc-1woa58v-0 gphfZm">
                 <div className="styled__TaglineWrapper-sc-1woa58v-2 dMhirS">
                    <p className="styled__Tagline-l6x3g7-0 fwxGdX" style={{color:'#422512'}}><span>Rose Garden</span><span>Solophok, Sikkim</span></p>
                 </div>
                 <div className="styled__Illustration-sc-1woa58v-1 eZuDCJ new-thingstodo-ackground-img"></div>
              </div>
              <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
              <p color="red" width="fullWidth" className="styled__BodyText-sc-1cy59ri-0 eFKdQU" style={{color:'#422512'}}>Find out what's on in Rose Garden with all the latest events, menu, shopping  and things to do.</p>
              <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
              <div className="styled__LinkModule-sc-5dbaax-2 izBTOQ new-thingstodo-button" >
                 <Link to="/things-to-do" >
                    <span style={{color:'#422512'}}>Explore More</span>
                     <div className="styled__Arrow-sc-5dbaax-1 gSFvVS" >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" stroke-linecap="square">
                          <g>
                             <path d="M25 7H1M19.3 13l6-6-6-6"></path>
                          </g>
                       </svg>
                    </div>
                 </Link>
                <div className="styled__Background-sc-5dbaax-0 iuAPkd new-thingtodo-background"></div>
              </div>
           </article>
        </div>
         
        <div className="styled__Column-sc-287lhv-1 kwTljX" >
            
           <div className="styled__ImageWrapper-sc-287lhv-2 bzWSDq">
              <picture>
                 <source media="(max-width: 414px)" srcSet="images/Bar-700kb.jpg?w=500&amp;auto=format"/>
                 <source media="(max-width: 1440px)" srcSet="images/Bar-700kb.jpg?w=720&amp;auto=format"/>
                 <img alt="rose gaarden bar" src="images/Bar-700kb.jpg?w=1280&amp;auto=format"/>
              </picture>
           </div>
            
            
        </div>

     </section>

    );
};

export default HomeThingsToDo;