import { useEffect, useRef, useState } from 'react'
import '../style/menu.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';

export default function Menu() {   
    const hamburger = useRef<HTMLDivElement>(null);
    const navMenu = useRef<HTMLUListElement>(null);

    const hamHandler = () => {
        if (hamburger.current && navMenu.current) {
            hamburger?.current.classList.toggle("active");
            navMenu?.current.classList.toggle("active");
        }
    }
    useEffect(() => {
        if (hamburger.current && navMenu.current) {
            let hamElement = hamburger.current;
            let navElement = navMenu.current;
            hamElement.addEventListener("click", hamHandler, false);
            document.querySelectorAll(".nav-item").forEach((link) =>
                link.addEventListener("click", () => {
                    hamElement.classList.remove("active");
                    navElement.classList.remove("active");
                }, false)
            );
        }
    }, [])

    return (
        <Router>
            <nav>
                <div className="logo"><Link to="/profile">Prodyut Das</Link></div>
                <div className="navbar">
                    <ul className="nav-menu" ref={navMenu}>
                        <li className="nav-item"><Link to="/profile">Home</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="hamburger" ref={hamburger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            <Switch>
                <Route exact path="/profile">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}
