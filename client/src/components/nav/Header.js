import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return(
        <nav className="navbar navbar-default new-navar" role="navigation" >
    	  <div className="container ">
		    
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      
		      <div className="navbar-brand navbar-brand-centered new-navbar-brand" >
                  
              <Link to="/">
			  <img className='new-logo' src='images/logo2.png' style={{width:50, height:50}} /> 
              
			  </Link>        
      	      
                      
           
                </div>
		    </div>

		   
		    <div className="collapse navbar-collapse" id="navbar-brand-centered" >
		      <ul className="nav navbar-nav new-navbar-nav" >
		        <li className="new-li"><Link to="/">Home</Link></li>
		        <li className="new-li"><Link to="/gardenrestaurant">Garden Restaurant</Link></li>
		        <li className="new-li2"><Link to="/gardencafe">Garden Cafe</Link></li>
		      </ul>
                
                
                
                
		      <ul className="nav navbar-nav navbar-right new-navbar-nav" >
		        
		        
		        <li className="new-li" ><Link to="/things-to-do">Things To Do </Link></li>
		        <li className="new-li"><Link to="/garden-shop">Garden Shop</Link></li>
		        <li className="new-li2"><Link to="/thegarden">The Garden</Link></li>
		        		        
		      </ul>
		    </div>
		  </div>
		</nav>
    );
};

export default Header;