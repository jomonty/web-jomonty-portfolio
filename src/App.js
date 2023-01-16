import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* <Router> */}
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Portfolio" element={ <Portfolio /> } />
          <Route path="/Contact" element={ <Contact /> } />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
