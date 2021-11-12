import React from "react";
import {Link} from "react-router-dom";
import '../../thegarden.css';
import CountUp from "react-countup";


const TheGardenBody = () => {


    return(
        <section>
            <div  className="styled__Spacer-sc-1fglqa0-0 cEkSzm"></div>
               <p id="section2" color="red" width="contentWidth" 
               className="styled__BodyText-sc-1cy59ri-0 ksgLbS gallery-text" 
               style={{width: '70%',margin: '0 auto', lineHeight: 1.32, color: '#422512', fontSize:29, textAlign: 'center'}}>Inspired by David Austin’s garden, 
               <Link to="/" style={{textDecoration:'underline'}}>Rose Garden, Solophok</Link> 
               is designed to create a heaven on earth experience away from the busy life. 
               Rose garden is the most beautiful garden in India, consisting of more than 
               5000+ varieties of plants from all over the world.</p>
               
               <div className="styled__Spacer-sc-1fglqa0-0 cfaCZZ"></div>
              
               <div className="styled__Spacer-sc-1fglqa0-0 cfaCZZ"></div>
               <div className="styled__Spacer-sc-1fglqa0-0 kuVzZu"></div>

            <div class="container" style={{paddingBottom:40}}>
                <div class="row">
                    <br/>
                <div class="col text-center " style={{fontSize:32, paddingBottom:20, fontWeight:500}}>
                    
                    <p class="gallery-count-text">Rose Garden By Numbers</p>
                    </div>
                    
                    
                    
                </div>
                <div class="row text-center">
                        <div class="col-md-4 col-xs-4">
                            <div class="counter">
                                <h2 class="timer count-title count-number" ><CountUp end={5000} duration={5} /></h2>
                                <p class="count-text " style={{fontSize:22}}>Plant Varieties</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-4">
                            <div class="counter">
                                <h2 class="timer count-title count-number" ><CountUp end={2} duration={5} /></h2>
                                <p class="count-text " style={{fontSize:22}}>Full-Time Gardeners</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-4 ">
                            <div class="counter">
                                <h2 class="timer count-title count-number" ><CountUp end={2} duration={5} /></h2>
                                <p class="count-text " style={{fontSize:22}}>Acres</p>
                            </div>
                        </div>

                    </div>
            </div>

            <div class="styled__Spacer-sc-1fglqa0-0 cfaCZZ"></div>
            <p color="red" width="contentWidth" class="styled__BodyText-sc-1cy59ri-0 enyzZn gallery-text" style={{color: '#422512'}}>
                Immerse yourself in the annual celebration  of Spring's return in Rose Garden, 
                Solophok. Enveloping you in lush greens, colourful blooms and breathtaking landscapes, 
                The Rose  Garden is a must-see oasis, growing in Sikkim. These photos will give you a glimpse of The Garden as they currently appear.
            </p>


            <div class="container gallery-container" style={{paddingTop:40, paddingBottom:40}}>

	<div class="iCGUca">
   <p style={{textAlign:'center', color:'#422512'}}>Our Garden</p>
   </div>
    
    <div class="tz-gallery">

        <div class="row">

            <div class="col-sm-12 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-1.jpg">
                    <img class="img-responsive" src="images/gallery-1.jpg" alt="Outside View of The Garden" title="Outside view of the Garden" />
                </a>
            </div>
            <div class="col-sm-6 col-md-4 gallery-col gallery-col">
                <a class="lightbox" href="images/gallery-2.jpg">
                    <img class="img-responsive" src="images/gallery-2.jpg" alt="View of Rose Garden, Solophok" title="View of Rose garden, Solophok" />
                </a>
            </div>
            <div class="col-sm-6 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-3.jpg">
                    <img class="img-responsive" src="images/gallery-3.jpg" alt="Roses - The Garden, Rose Garden Solophok" title="Roses - The Garden, Rose Garden Solophok" />
                </a>
            </div>
           

        </div>
        
                <div class="row" style={{paddingTop:20}}>

            <div class="col-sm-12 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-4.jpg">
                    <img class="img-responsive" src="images/gallery-4.jpg" alt="Image of Rose Garden in Solophok, Namchi" title="Image of Rose Garden in Solophok, Namchi" />
                </a>
            </div>
            <div class="col-sm-6 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-5.jpg">
                    <img class="img-responsive" src="images/gallery-5.jpg" alt="Garden View - Rose Garden, Solophok, Namchi" title="Garden View - Rose Garden, Solophok, Namchi" />
                </a>
            </div>
            <div class="col-sm-6 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-6.jpg">
                    <img class="img-responsive" src="images/gallery-6.jpg" alt="Beautiful View of The Garden - Solophok, Namchi" title="Beautiful View of The Garden - Solophok, Namchi" />
                </a>
            </div>
           

        </div>
        
        
        
          <div class="row" style={{paddingTop:20}}>

            <div class="col-sm-12 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-7.jpg">
                    <img class="img-responsive" src="images/gallery-7.jpg" alt="Outside View of the Garden - Rose Garden Solophok, Namchi" title="Outside View of the Garden - Rose Garden Solophok, Namchi" />
                </a>
            </div>
            <div class="col-sm-6 col-md-4 gallery-col">
                <a class="lightbox" href="images/gallery-8.jpg">
                    <img class="img-responsive" src="images/gallery-8.jpg" alt="Beautiful View of the Roses in Rose Garden Solophok" title="Beautiful View of the Roses in Rose Garden Solophok" />
                </a>
            </div>
              
              <div class="col-sm-6 col-md-4 gallery-col">
                <a class="lightbox" href="images/galelry-9.jpg">
                    <img class="img-responsive" src="images/galelry-9.jpg" alt="View of Sitting Place in The Garden, Solophok" title="View of Sitting Place in The Garden, Solophok" />
                </a>
            </div>
           
           

        </div>              
    </div>
</div>

        </section>
    );
};

export default TheGardenBody;