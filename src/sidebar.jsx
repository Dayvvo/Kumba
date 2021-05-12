import React from 'react';
import { NavLink } from 'react-router-dom';
import { togglenav } from './togglenav';



const Sidebar = ()=>{



    return(
 
            <div className="col-lg-4 col-xl-3 py-4 green nopad sidebar" id='sidebar'>
                <div className="logo px-5 h2 d-flex justify-content-between">
                    <div className='d-flex align-items-center'>Kumba</div>
                    <i className="h3 d-inline d-lg-none fa fa-times wyt" onClick={()=>togglenav()}></i>
                </div>
                <div className='py-4'>
                    <NavLink to='/' className="d-flex px-5 my-2 py-2 wyt">
                    <i className="d-flex align-items-center fa fa-user icon" ></i>                
                    <div className="ml-3 d-flex align-items-center">My profile</div>
                    </NavLink>

                    <NavLink to='/orders' className="d-flex px-5 my-2 py-2 wyt my-5">
                    <i className="d-flex align-items-center fa fa-shopping-cart icon"></i>                
                    <div className="ml-3 d-flex align-items-center">Order Summary</div>

                    </NavLink>

                </div>
            </div>

            

 


    )


}


export default Sidebar