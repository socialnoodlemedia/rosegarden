import React from "react";
import {Link} from "react-router-dom";

const HomeMapContact = () => {
    return(
<section className="styled__TwoUpImageWithContent-sc-287lhv-0 cgazkp new-mapcontact-section" >
   <div className="styled__Column-sc-287lhv-1 kwTljX caontact-colum-map">
      <div className="styled__ImageWrapper-sc-287lhv-2 bzWSDq">
         <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.041859309506!2d88.34096501438162!3d27.15497315615726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e427a2ec74d2ad%3A0x232ecef5b2d634d!2sRose%20Garden%20Solophok!5e0!3m2!1sen!2sin!4v1614423012813!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
   </div>
  
   <div className="styled__Column-sc-287lhv-1 kwTljX">
       <article className="styled__ColumnBody-sc-287lhv-3 pSRTZ new-mapcontact-right" >
         <article className="styled__HeadlineLarge-sc-15i8qxt-0 dmtNSE">
            <h1 color="red" className="styled__Headline-sc-15i8qxt-1 styled__HeadlineSimple-sc-15i8qxt-2 cqNxgl ezSTPR" style={{color:'#422512'}}><span>CONTACT </span><span>US</span></h1>
         </article>
         <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
         <div className="styled__IllustrationWrapper-sc-1woa58v-0 gphfZm">
            <div className="styled__TaglineWrapper-sc-1woa58v-2 dMhirS">
               <p className="styled__Tagline-l6x3g7-0 fwxGdX" style={{color:'#422512'}}><span>Our Address: </span><span></span></p>
            </div>
         </div>
         <h2 className="new-mapcontact-address-head">Rose Garden Solophok</h2>
         <p><i className="fa fa-map-marker"></i>Below Siddheswar Dham, <br />
            Namchi, Sikkim 737126 <br />
            <i className="fa fa-phone"></i>+91-6295607427</p>

         <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
         <div className="styled__LinkModule-sc-5dbaax-2 izBTOQ new-contactmap-button" >
            <Link to="/contact-us">
               <span style={{color:'#422512'}}>Contact Us Now</span>
               <div className="styled__Arrow-sc-5dbaax-1 gSFvVS">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" stroke-linecap="square">
                     <g>
                        <path d="M25 7H1M19.3 13l6-6-6-6"></path>
                     </g>
                  </svg>
               </div>
            </Link>
            <div className="styled__Background-sc-5dbaax-0 iuAPkd new-mapcontact-background"></div>
         </div>

         <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>

       </article>
   </div>


</section>
    );
};

export default HomeMapContact;