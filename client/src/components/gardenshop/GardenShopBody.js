import React from "react";

const GardenShopBody = () => {
    return(
        <section>
            <p id="section2" color="red" width="contentWidth" 
            className="styled__BodyText-sc-1cy59ri-0 enyzZn">
                The Shop offers handpicked collections of handicrafts, 
                paintings and gifts etc., made by the local artisans &amp; 
                entrepreneurs and curated by Rose Garden Family.
            </p>

            <section className="styled__TwoUpImageWithContent-sc-287lhv garden-shop" 
            style={{height: 850, backgroundColor: '#fff6f0', paddingBottom:40}}>
                  <div className="styled__Column-sc-287lhv-1 kwTljX shop-img" >
                     <div className="styled__ImageWrapper-sc-287lhv-2 bzWSDq">
                        <picture>
                           <source media="(max-width: 414px)" srcSet="images/rose garden shop.jpg?w=500&amp;auto=format"/>
                           <source media="(max-width: 1440px)" srcSet="images/rose garden shop.jpg?w=720&amp;auto=format"/>
                           <img alt="View of Rose Garden Solophok" title="View of Rose Garden Solophok" src="images/rose garden shop.jpg?w=1280&amp;auto=format"/>
                        </picture>
                     </div>
                  </div>
                  <div className="styled__Column-sc-287lhv-1 kwTljX" style={{paddingTop:60}} >
                     <article className="styled__ColumnBody-sc-287lhv-3 pSRTZ" style={{color:'#422512'}} >
                        <article className="styled__HeadlineLarge-sc-15i8qxt-0 dmtNSE" >
                           <h2 color="red" className="styled__Headline-sc-15i8qxt-1 styled__HeadlineSimple-sc-15i8qxt-2 cqNxgl ezSTPR" style={{color:'#422512', fontSize:59}}><span >OPENING HOURS & </span><span>CONTACT</span></h2>
                        </article>
                        <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
                        <div className="styled__IllustrationWrapper-sc-1woa58v-0 gphfZm">
                           <div className="styled__TaglineWrapper-sc-1woa58v-2 dMhirS">
                              <p className="styled__Tagline-l6x3g7-0 fwxGdX" style={{color:'#422512'}}><span>TIMING</span><span></span></p>
                              
                           </div>
                            <div className="row" style={{margin: '0px !important'}}>
                            <div className="col-md-6 col-xs-4 col-sm-6">
                                <p style={{paddingBottom:10}}>Monday</p>
                                <p style={{paddingBottom:10}}>Tuesday</p>
                                <p style={{paddingBottom:10}}>Wednesday</p>
                                <p style={{paddingBottom:10}}>Thursday</p>
                                <p style={{paddingBottom:10}}>Friday</p>
                                <p style={{paddingBottom:10}}>Saturday</p>
                                <p style={{paddingBottom:10}}>Sunday</p>
                            </div>
                            <div className="col-md-6 col-xs-8 col-sm-6">
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                                <p style={{fontWeight:700, paddingBottom:10}}>9:00 AM - 10:30PM</p>
                            </div>
                                
                            </div>
                     
                        </div>
                        <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>

                 <p>
                 Visit our new instagram @rosegardensikkim to discover handicrafts, paintings and gifts etc.
                 </p>
                 <p style={{fontWeight:600, marginTop:10, marginBottom:10}}>Please visit us by walking, cycling, or public transport when possible.</p>
                 
                        <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
       
                          <iframe className="shop-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.041859309506!2d88.34096501438162!3d27.15497315615726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e427a2ec74d2ad%3A0x232ecef5b2d634d!2sRose%20Garden%20Solophok!5e0!3m2!1sen!2sin!4v1614423012813!5m2!1sen!2sin" width="400" height="150" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                         
                         
                         
                         
                        <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
                     </article>
                  </div>
                  
               </section>
        </section>
    );
};

export default GardenShopBody;