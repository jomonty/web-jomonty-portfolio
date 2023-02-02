import { Link } from 'react-router-dom';
import ContactButtons from './ContactButtons';
import Personal from '../data/Personal';

const Header = () => {

    return (
        <header align="center" className="container">
            <div className="conatiner">
                <hgroup>
                    <h1>{Personal.header}</h1>
                    <h5>{Personal.subheader}</h5>
                </hgroup>
                <nav>
                    <ContactButtons />
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