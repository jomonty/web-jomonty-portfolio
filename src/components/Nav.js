import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <h1 className="App-header">Jomonty</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </>
    )
};

export default Nav