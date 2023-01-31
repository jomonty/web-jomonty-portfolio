import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
        <nav>
            <hgroup>
                <h1>jomonty</h1>
                <h2>portfolio</h2>
            </hgroup>
            <ul>
                <li><Link to="/" role="button" >Home</Link></li>
                <li><Link to="/Portfolio" role="button" class="outline" >Portfolio</Link></li>
                <li><Link to="/Contact" role="button" class="secondary">Contact</Link></li>
            </ul>
        </nav>
        </header>
    )
};

export default Nav