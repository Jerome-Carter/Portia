import logo from './logo.svg';
import './App.css';
import {Button, ListGroup, Badge,Nav } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Portfolios</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">All Assets</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">News</Nav.Link>
  </Nav.Item>
</Nav>
      <ListGroup as="ul" >
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Chase Bank</div>
      
    </div>
    <Badge bg="success" pill>
      $1,400
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Robinhood</div>
      
    </div>
    <Badge bg="success" pill>
      $500
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Coinbase</div>
      
    </div>
    <Badge bg="success" pill>
      $200
    </Badge>
  </ListGroup.Item>
</ListGroup>
    <div>
      <h3><strong>Total Value:</strong> $2,100</h3>
    </div>
    </div>

    
  );
}

export default App;
