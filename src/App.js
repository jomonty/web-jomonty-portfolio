import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Main /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
