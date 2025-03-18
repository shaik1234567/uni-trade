import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const SideBar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');

    }


  return (
    <div>
      <section>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px', height: "100vh" , overflow : 'hidden'  }}>
          <NavLink to="/main" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            {/* <i className="bi bi-bootstrap" style={{ fontSize: '40px', marginRight: '10px' }}></i> */}
            <span className="fs-4">Uni-Trade</span>
          </NavLink>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to="/main" className="nav-link " aria-current="page">
                <i className="bi bi-house" style={{ marginRight: '8px' }}></i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className="nav-link text-white">
                <i className="bi bi-speedometer2" style={{ marginRight: '8px' }}></i>
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/orders" className="nav-link text-white">
                <i className="bi bi-table" style={{ marginRight: '8px' }}></i>
                Orders
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/products" className="nav-link text-white">
                <i className="bi bi-grid" style={{ marginRight: '8px' }}></i>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers" className="nav-link text-white">
                <i className="bi bi-people" style={{ marginRight: '8px' }}></i>
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-items" className="nav-link text-white">
                <i className="bi bi-plus" style={{ marginRight: '8px' }}></i>
                Add product
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown">

            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <NavLink to="/" className="dropdown-item" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right" style={{ marginRight: '8px' }}></i>
                  Sign out
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </section>
    </div>
  )
}

export default SideBar
