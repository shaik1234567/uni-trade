
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import body from '../assets/body.jpg';

import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import '../index.css'
import '../App.css'

const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            {/* NavBar */}
            <section>
                <header className="p-3 mb-3 border-bottom">
                    <div className="container ">
                        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
                            <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                    <use xlinkHref="#bootstrap"></use>
                                </svg>
                            </NavLink>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li className='p-2'>
                                    <span className='varela-round-regular  text-lg-start text-primary' style={{fontSize: "25px" , color:'rgb(104,179,185)'}}>uni-trade.</span>
                                    

                                </li>
                            </ul>


                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 custom-nav">
                                <li className="me-4"><NavLink to="/" className="nav-link px-2 source-sans-3-navs text-secondary ">Home</NavLink></li>
                                <li className="me-4"><NavLink to="/aboutus" className="nav-link px-2 text-secondary ">About us</NavLink></li>
                                <li className="me-4"><NavLink to="/login" className="nav-link px-2 source-sans-3-navs text-secondary">Login</NavLink></li>
                            </ul>

                            {/* 
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            </form> */}
                            {/* <div className="dropdown-center">
                                <Dropdown className="text-end">
                                    <Dropdown.Toggle as="a" href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle   ">

                                        <button className='btn'><h4><i class="bi bi-person-fill"></i></h4></button>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="text-small">
                                        <Dropdown.Item href="#">New project...</Dropdown.Item>
                                        <Dropdown.Item href="#">Settings</Dropdown.Item>
                                        <Dropdown.Item href="#">Profile</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">Sign out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> */}

                        </div>



                    </div>

                </header>
            </section>



            {/* Home body */}
            <div className='row '>
                <div className='col-4 p-3 '>
                    <h1 className='poppins-light descrption-home'> <span className='text-primary'   style={{ color:'rgb(104,179,185)'}}>Uni-Trade</span>- Seamless buying and selling on campus.</h1>


                </div>
                <div className='col-8 justify-content-center'>
                    <img src={body} alt="Bodyimage" className="img-fluid" />


                </div>

            </div>



        </div >
    )
}

export default Home
