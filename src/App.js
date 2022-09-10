import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/navbar";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
