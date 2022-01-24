import React from 'react';

const Navbar = () => {
  return (
  <>
        <nav className="navbar navbar-expand-lg bg-light text-dark bg-opacity-75 shadow-sm py-3">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4 text-danger" href="#">
                    Myntra Insider
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Products</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">About</a>
                        </li>

                        <li className="nav-item">   
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>

                    </ul>  

                    <div className="buttons">
                        <a className="btn btn-outline-dark" href="#">
                            <i className='fa fa-sign-in me-1'></i> Login
                        </a>

                        <a class="btn btn-outline-dark ms-2" href="#">
                            <i className='fa fa-user-plus me-1'></i> Register
                        </a>

                        <a class="btn btn-outline-dark ms-2" href="#">
                            <i className='fa fa-shopping-cart me-1'></i> Cart (0)
                        </a>

                    </div>
                </div>
            </div>
        </nav>
  </>
  );    
};

export default Navbar;