import './App.css';
import Login from "./components/Login.js";
import Portfolios from './components/Portfolios.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap/';
import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from "./store/reducer";
import Assets from './components/Assets';
import News from './components/News';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}>
        <MemoryRouter
          initialEntries={["/portfolios"]}
          initialIndex={0}
        >

        <Nav variant="tabs" defaultActiveKey="/portfolios">
        <Nav.Item>
          <Link className= "nav-link" to ="/portfolios">Portfolios</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className= "nav-link" to ="/assets">All Assets</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className= "nav-link" to = "/news">News</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className= "nav-link" to = "/login">Login</Link>
        </Nav.Item>
      </Nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
