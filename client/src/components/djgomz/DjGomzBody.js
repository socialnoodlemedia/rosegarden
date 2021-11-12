import React from "react";
import {Link} from "react-router-dom";

const DjGomzBody = () => {
    return(
        <section id="section2" className="" style={{background:'#f4f2e9'}}>
        <div className="container">
            
            <div className="row">
                
                <div className="col-md-10 col-md-offset-1" style={{background:'#fff', padding:40, marginTop:20}}>
                    <div className="row" style={{paddingBottom:20, borderBottom: '1px #ddd solid'}} >
                   <div className="col-md-8">
                   <p style={{fontSize:22, fontWeight:700, paddingBottom:10}}>Evening Party with DJ Gomz</p>
                    <p>Hip Hop | Hindi, English, Nepali | All Age Groups</p>
                   </div>
                    <div className="col-md-4" style={{paddingTop:20}}>
                        <Link to="/contact-us">
                        <button style={{border:'none', background:'rgb(236, 94, 113)', color:'#fff',
                         paddingLeft:40, paddingRight:40, paddingTop:15, paddingBottom:15}}>Contact Us</button>
                        </Link>
                    </div>
                        
                    </div>
                    
                    <div className="row" style={{paddingTop:20}}>
                    <div className="col-md-2">
                       <p>Live Streaming</p>
                    </div>
                    
                    <div className="col-md-10">
                       <p>Date: 23rd jan 2021 | 6:00pm</p>
                    </div>
                   </div>
                </div>
            
            </div>
            
             <div className="row">
                    <div className="col-md-10 col-md-offset-1" style={{background:'#fff', padding:40, marginTop:20, marginBottom:20}}>
                         <div className="row">
                        <div className="col-md-5" style={{padding:20, margin:10, background:'rgb(255, 249, 227) !important'}}>
                           <h2 style={{fontSize:18, fontWeight:700, paddingBottom:10}}>Note:</h2>
                            <ul style={{fontSize:14}}>
                               <li>
                                Tickets are live!
                               </li>
                                
                                
                            </ul>
                        </div>
                        
                       
                             
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12" style={{margin:10}}>
                           <h2 style={{fontSize:18, fontWeight:700, paddingBottom:10}}>Why you should attend?</h2>
                            <ul style={{lineHeight:'22px', fontSize:18}}>
                               <li>Exclusive access to the event</li>
                               
                            </ul>
                           </div>
                             <div className="col-md-12" style={{margin:10}}>
                           <h2 style={{fontSize:18, fontWeight:700, paddingBottom:10}}>About Event:</h2>
                           <p style={{fontSize:18}}>
                                 One of the best DJ of Sikkim, DJ Gomez and his music is sure to give you the best musical experience. 🔥
                                
                           </p>
                           </div>
                        </div>
                   </div>
                   
                </div>
        
        </div>
            
            
            
        </section>
    );
}

export default DjGomzBody;