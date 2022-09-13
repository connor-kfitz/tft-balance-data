import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DndContext } from '@dnd-kit/core';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Nav from "./components/navbar";
import Homepage from "./pages/homepage";
import Items from "./pages/items";
import Traits from "./pages/traits";
import Statistics from './pages/statistics';


function App() {
  return (

    <DndContext>
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
    </DndContext>
  );
}

export default App;
