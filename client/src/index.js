import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap/';

ReactDOM.render(
  <React.StrictMode>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/portfolios">Portfolios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/assets">All Assets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/news">News</Nav.Link>
      </Nav.Item>
    </Nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
