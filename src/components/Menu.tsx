import '../style/menu.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import { IoHomeOutline, IoPersonCircle, IoConstructSharp } from "react-icons/io5";

export default function Menu() {
    return (
        <Router>
            <nav>
                <a href="#profile" className="navbar__link">
                    <span className="navbar__icon"><Link to="/profile"><IoHomeOutline color='white'/></Link></span>
                    <span className="navbar__label">Home</span>
                </a>
                <a href="#about" className="navbar__link">
                    <span className="navbar__icon"><Link to="/about"><IoPersonCircle color='white'/></Link></span>
                    <span className="navbar__label">About</span>
                </a>
                <a href="#dashboard" className="navbar__link">
                    <span className="navbar__icon"><Link to="/dashboard"><IoConstructSharp color='white'/></Link></span>
                    <span className="navbar__label">Work</span>
                </a>
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
