import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import '@picocss/pico';
import './App.css';

function App() {
  return (
    <body>
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={ <Portfolio /> } />
          <Route path="/skills" element={ <Skills /> } />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </body>
  );
}

export default App;
