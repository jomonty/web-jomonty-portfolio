import { Link } from 'react-router-dom';
import ExtLinkButtonNav from './ExtLinkButtonNav';
const Footer = () => {

    return (
        <footer align="center">
        <div>
            <ExtLinkButtonNav />
            <nav>
                <ul></ul>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/Projects" >Projects</Link></li>
                </ul>
                <ul></ul>
            </nav>
        </div>
        </footer>
    )
};

export default Footer;