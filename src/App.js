import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Eventgen from './components/general/Event'
import Eventeee from './components/eee/Event'
import Eventece from './components/ece/Event'
import Eventcse from './components/cse/Event'
import Formgen from './components/general/Form'
import Formeee from './components/eee/Form'
import Formece from './components/ece/Form'
import Formcse from './components/cse/Form'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/General/Event" element={<Eventgen />} />
        <Route path="/EEE/Event" element={<Eventeee />} />
        <Route path="/ECE/Event" element={<Eventece />} />
        <Route path="/CSE/Event" element={<Eventcse />} />
        <Route path="/General/Event/Form" element={<Formgen />} />
        <Route path="/EEE/Event/Form" element={<Formeee />} />
        <Route path="/ECE/Event/Form" element={<Formece />} />
        <Route path="/CSE/Event/Form" element={<Formcse />} />

      </Routes>
    </Router>
  );
}

export default App;
