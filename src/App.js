import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/navbar";
import Homepage from "./pages/homepage";
import Items from "./pages/items";
import Traits from "./pages/traits";
import Statistics from './pages/statistics';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/traits" element={<Traits/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
