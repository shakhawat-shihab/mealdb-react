import React from 'react';
import logo from '../../../src/logo.png';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/"> <img src={logo} alt="" className='' width='200px' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="/order-review">Order Review</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="/manage-inventory">Manage Inventory</a>
                            </li>
                        </ul>
                        <form className="d-flex ms-3">
                            <input className="form-control me-2 input-design" type="search" placeholder="Search Foods" aria-label="Search" onChange={props.eventHandler} />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;