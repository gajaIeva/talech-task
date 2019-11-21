import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './../logo.png';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="/products">
                    <img src={logo} width="30" height="30" alt="CactusLogo"/>
                </a>
                <Link to="/products" className="navbar-brand">Cactus Shop</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/products/create" className="nav-link">Create product</Link>
                        </li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default Nav;