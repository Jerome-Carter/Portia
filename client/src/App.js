import './App.css';
import Login from "./components/Login.js";
import Portfolios from './components/Portfolios.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap/';
import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/portfolios">
        <Nav.Item>
          <Nav.Link href="/portfolios">Portfolios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/assets">All Assets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/news">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/portfolios" element={<Portfolios />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
