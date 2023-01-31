import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import '@picocss/pico';
import './App.css';

function App() {
  return (
    <body>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Portfolio" element={ <Portfolio /> } />
          <Route path="/Contact" element={ <Contact /> } />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
