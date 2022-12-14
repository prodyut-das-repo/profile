import '../style/menu.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import { IoHomeOutline, IoPersonCircle, IoConstructSharp, IoMail, IoCall } from "react-icons/io5";
import Dashboard from './Container';

export default function Menu() {
    return (
        <Router>
            <nav>
                <span className="navbar__link">
                    <span className="navbar__icon"><Link to="/profile"><IoHomeOutline color='white' /></Link></span>
                    <span className="navbar__label">Home</span>
                </span>
                <span className="navbar__link">
                    <span className="navbar__icon"><Link to="/about"><IoPersonCircle color='white' /></Link></span>
                    <span className="navbar__label">About</span>
                </span>
                <span className="navbar__link">
                    <span className="navbar__icon"><Link to="/dashboard"><IoMail color='white' /></Link></span>
                    <span className="navbar__label">Mailing Info</span>
                </span>
                <span className="navbar__link" onClick={() => window.open('tel:+919564384487')}>
                    <span className="navbar__icon"><IoCall color='white' /></span>
                    <span className="navbar__label">call</span>
                </span>
            </nav>
            <Switch>
                <Route exact path="/profile">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}
