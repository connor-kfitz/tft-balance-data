import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Items from "./pages/Items";
import Traits from "./pages/Traits";
import Statistics from './pages/Statistics';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/traits" element={<Traits/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
