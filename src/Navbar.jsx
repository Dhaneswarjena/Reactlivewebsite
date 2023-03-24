import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css'
const Navbar=()=>{
return(<>
    <div className='container-fluid Nav_bg'>
        <div className='row'>
           <div className='col-10 mx-auto'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">JENA Tech</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink exact to='/' className="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to='/about' className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink exact to='/service' className="nav-link">
                        Service
                    </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink exact to='/contact' className="nav-link">
                        Contact
                    </NavLink>
                    </li>
                </ul>
                
                </div>
            </div> 
            </nav>
           </div>
        </div>
    </div>
</>)
}
export default Navbar;