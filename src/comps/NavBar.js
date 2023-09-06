import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = (props) => {

    const [active, setActive] = useState(0);
    const [mode, setMode] = useState(props.mode);

    const changeMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    const handleClick = (idx) => setActive(idx);

    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    } 

    const handleSearch = (e) => {
        e.preventDefault();
    } 

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark : 'light'} fixed-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: 'white', fontWeight: '543' }} to="/">MyNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link " onClick={() => handleClick(0)} aria-current="page" style={{ color: active === 0 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 0 ? 'underline' : 'none' }} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(1)} style={{ color: active === 1 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 1 ? 'underline' : 'none' }} to="/">About</Link> </li>
                            <li className="nav-item">
                                <Link className="nav-link "  onClick={() => handleClick(2)} style={{ color: active === 2 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 2 ? 'underline' : 'none' }} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(3)} style={{ color: active === 3 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 3 ? 'underline' : 'none' }} to="/entertainment">Entertainment</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(4)} style={{ color: active === 4 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 4 ? 'underline' : 'none' }} to="/general">General</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(5)} style={{ color: active === 5 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 5 ? 'underline' : 'none' }} to="/health">Health</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(6)} style={{ color: active === 6 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 6 ? 'underline' : 'none' }} to="/science">Science</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(7)} style={{ color: active === 7 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 7 ? 'underline' : 'none' }} to="/sports">Sports</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " onClick={() => handleClick(8)} style={{ color: active === 8 ? 'pink' : 'white', fontWeight: '543', textDecoration: active === 8 ? 'underline' : 'none' }} to="/technology">Technology</Link>

                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{ margin: '0 15px 0 0', color: 'white', fontWeight: '543' }} htmlFor="flexSwitchCheckDefault"> Enable {mode === 'light' ? 'dark' : 'light'} mode</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-1" type="search" placeholder="search here..." aria-label="Search" onChange={handleInput} style={{ height: '40px', width: '175px', margin: 'auto 1px' }} />
                            <button className="btn btn-outline-success" type="submit" onClick={ handleSearch}>
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;


//   #101010