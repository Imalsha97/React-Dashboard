import React from 'react';
// import { Navbar,Container,Nav } from 'react-bootstrap';
 let NavBar = () => {
     return(
         <>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
             <div className="container">
                 <a href="" className="navbar-brand text-primary ">
                 <i class="fa fa-ship" aria-hidden="true"></i> Welcome to  Karadiya
                 </a>
                 <button className="navbar-toggler" data-toggle="collapse" data-target="#ui-navbar">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="ui-navbar">
                     <ul className="navbar-nav">
                         <li className="nav-item">
                             <a href="" className="nav-link">
                                 <i className="fa fa-chart-bar text-muted"></i>
                            Dashboard</a>
                         </li>
                         <li className="nav-item">
                             <a href="" className="nav-link">
                                 <i className="fa fa-list text-muted"></i>
                            Departure</a>
                         </li>
                         <li className="nav-item">
                             <a href="" className="nav-link">
                                 <i className="fa fa-sitemap text-muted"></i>
                            Categories</a>
                         </li>
                     </ul>
                     <ul className="navbar-nav ml-auto " style={{position: 'absolute', right: 0}}>
                         <li className="nav-item dropdown">
                             <a href="" className="nav-link" href="#" data-toggle="dropdown">
                             <i class="fa fa-sign-in" aria-hidden="true"></i>
                                 Sign In
                            </a>
                            <div className="dropdown-menu">
                                <a href="" className="dropdown-item">
                                    <i className="fa fa-user-circle"></i>
            
                                    Profile</a>
                                    <a href="" className="dropdown-item">
                                    <i className="fa fa-user-cogs"></i>
            
                                    Settings</a>
                            </div>
                         </li>
                         <li className="nav-item">
                             <a href="" className="nav-link">
                             <i class="fa fa-sign-out" aria-hidden="true"></i>
                            Sign Out</a>
                         </li>
                         
                     </ul>
                 </div>
             </div>
         </nav>
         </>
     )
 };

 export default NavBar;
