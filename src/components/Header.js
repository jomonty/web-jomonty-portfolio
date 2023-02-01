import { Link } from 'react-router-dom';
import ExtLinkButtonNav from './ExtLinkButtonNav';

const Header = () => {
    
    return (
        <header align="center">
            <div>
                <hgroup>
                    <h1>JOSHMONTGOMERY.DEV</h1>
                    <h5>jomonty</h5>
                </hgroup>
                <nav>
                    <ExtLinkButtonNav />
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/projects" >Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
};

export default Header;