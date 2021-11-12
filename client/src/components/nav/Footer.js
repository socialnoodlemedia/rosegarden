import React from "react";
import {Link} from "react-router-dom";
import "../../Footer.css";

const Footer = () => {
    return(
        <>
        <div className="row newsletter-section new-newsletter-section">
        <div className="col-md-12">
       <div className="styled__ReservationOverlay-sc-1pnxpni-0 enHGFD">
           <div className="col-md-6 col-md-offset-3">
   
      <div className="styled__Header-sc-1pnxpni-1 jxNIKH" >
         <article className="styled__HeadlineLarge-sc-15i8qxt-0 dmtNSE">
            <h1 color="light" className="styled__Headline-sc-15i8qxt-1 styled__HeadlineComplex-sc-15i8qxt-3 jKngbG cVseuW new-newsletter-heading" >
                
                <span> NEWS LETTER</span></h1>
              
                      <p style={{textAlign:'center'}}>
                      Sign up to our newsletter to stay updated.
                      
                      </p>
                          
         </article>
      </div>
      <div className="styled__Content-sc-1pnxpni-9 gaKrpd">
         <div className="styled__SuccessMessage-sc-1pnxpni-10 dYvFjh">
            <div className="styled__SuccessMessageIllustration-sc-1pnxpni-12 styled__SuccessMessageIllustrationLight-sc-1pnxpni-13 ceQTvo fVkrZr"></div>
            <p className="styled__SuccessMessageText-sc-1pnxpni-11 gvAyC"><span>Thank your for your reservation enquiry. We'll be in touch soon.</span></p>
         </div>
         <div className="styled__Form-sc-1pnxpni-15 TwlOk">
            <div className="styled__FormRow-sc-1pnxpni-16 ikrOHY">
                <form method="post" action="newsletter.php">
                <label clasclassNames="styled__FormElement-sc-1pnxpni-17 eABKyP news-label" >
                    
                    <span style={{color:'#422512', display: 'block', fontFamily: 'Trio Grotesk Regular, sans-serif',
                     fontSize: 12, letterSpacing: 0.8,
                     textTransform: 'uppercase',
                     marginBottom: 10}}>Email Address</span>

                    <input type="email" name="email" id="email" value="" className="newsletterInput" style={{}} placeholder="Type your Email Address" />
                </label>
                <label className="" >
                    <input type="submit" name="submit" value="Subscribe" className="styled__FormSubmit-sc-1pnxpni-23 bvKlmJ " 
                    style={{paddingLeft:20, paddingRight:20}} />
                </label>
                </form>
             </div>
         </div>
      </div>
   </div>
         
           
            </div>
   </div>
   </div>
   
   
   <footer className="styled__Footer-opalm4-0 ckgRYM new-footer-section" >
               <div className="styled__Spacer-sc-1fglqa0-0 kZUWpy"></div>
               <p className="styled__Headline-opalm4-1 cfTTqS" style={{color: '#fff6f0'}}> plan your visit</p>
               <div className="styled__Illustration-opalm4-2 hMoHpr new-footer-illsutrator" >
                   
               </div>
               <div className="styled__Spacer-sc-1fglqa0-0 fJHgYC"></div>
               <Link className="styled__LinkDefault-opalm4-7 styled__CTALink-opalm4-12 khixjZ bGljjA" to="/contact-us">
                  <span style={{color: '#fff6f0'}}>Book now</span>
                  <div className="styled__BorderDefault-opalm4-8 styled__CTALinkBorder-opalm4-11 bKBWhi kVXfZf" style={{backgroundColor: '#fff6f0'}}></div>
               </Link>
               <div className="styled__Spacer-sc-1fglqa0-0 kZUWpy"></div>
               <div className="styled__Columns-opalm4-4 lcLIpo">
                  <article className="styled__Column-opalm4-5 iCGUca" >
                     <p style={{color: '#fff6f0'}}>Contact</p>
                     <p style={{color: '#fff6f0'}}>Details</p>
                     <div className="styled__SmallLinksWrapper-opalm4-6 LtxAk">
                     <div>
                  <a href="https://www.instagram.com/rosegardensikkim/" target="_blank" rel="noopener noreferrer" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}> <i class="fa fa-instagram"></i>Instagram </span>                     
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                  </a>
                  <a href="https://www.facebook.com/Rose-Garden-Solophok-208799833372010/" target="_blank" rel="noopener noreferrer" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}> <i className="fa fa-facebook"></i>Facebook </span>                     
                  </a>
             </div>
                        <a href="mailto:info@rosegarden.com" target="_blank" rel="noopener noreferrer" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                            <span style={{color: '#fff6f0'}}><i className="fa fa-envelope"></i>info@rosegarden.com</span></a>
                            <a href="tel:6295607427" rel="noopener noreferrer" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                            <span style={{color: '#fff6f0'}}><i className="fa fa-phone"></i> +91-6295607427</span>
                        </a>
                     </div>
                  </article>
                  <article className="styled__Column-opalm4-5 iCGUca new-footer-right" >
                     <p style={{color: '#fff6f0'}}>Important</p>
                     <p style={{color: '#fff6f0'}}>Links</p>
                     <div className="styled__SmallLinksWrapper-opalm4-6 LtxAk">
                        <Link to="/things-to-do" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>Events</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                        <Link to="/gardenrestaurant" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>Restaurant</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                        <Link to="garden-shop" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>Garden Shop</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                        <Link to="/thegarden" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>The Garden</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                        <Link to="/contact-us" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>Contact Us</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                        <Link to="/privacy-policy" target="" rel="" className="styled__LinkDefault-opalm4-7 styled__Link-opalm4-13 khixjZ cSSbRD">
                           <span style={{color: '#fff6f0'}}>Privacy Policy</span>
                           <div className="styled__LinkBorderWrapper-opalm4-9 dcpoIf">
                              <div className="styled__LinkBorder-opalm4-10 kweZKg"></div>
                           </div>
                        </Link>
                     </div>
                  </article>
               </div>
               <div className="styled__Spacer-sc-1fglqa0-0 kZUWpy"></div>
               <div className="styled__LogoType-opalm4-3 ">
                   <h1 className="new-footer-brand-text" >Rose Garden</h1>
                   <p className="footer-solophok new-footer-brand-text2" >Solophok</p>
               </div>
               <div className="styled__Spacer-sc-1fglqa0-0 bWpAKx"></div>
            </footer>
          
        </>
    );
};

export default Footer;