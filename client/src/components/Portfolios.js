import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Badge, Accordion, CardGroup } from 'react-bootstrap/';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import Card from 'react-bootstrap/Card'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import './Portfolios.css';
//const decoratedOnClick = useAccordionButton(eventKey, onClick);
    
function Portfolios() {
    return (
        <div className="Portfolios">
         <Accordion>
  <Accordion.Item eventKey="0">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $1,400
                    </Badge>
    <Accordion.Header id= "block1" >Chase Bank
    
                    </Accordion.Header>
                    
                    </div>
    <Accordion.Body>
    <ListGroup as="ul" >
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Checking's Account</div>

                    </div>
                    <Badge bg="success" pill>
                        $1,000
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Saving's Account</div>

                    </div>
                    <Badge bg="success" pill>
                        $400
                    </Badge>
        </ListGroup.Item>

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $500
                    </Badge>
    <Accordion.Header id= "block1" >Robinhood
    
                    </Accordion.Header>
                    
                    </div>
    <Accordion.Body>
    <ListGroup as="ul" >
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">TSLA</div>

                    </div>
                    <Badge bg="success" pill>
                        $250
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">HD</div>

                    </div>
                    <Badge bg="success" pill>
                        $100
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">ROKU</div>

                    </div>
                    <Badge bg="success" pill>
                        $100
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">GGPI</div>

                    </div>
                    <Badge bg="success" pill>
                        $50
                    </Badge>
        </ListGroup.Item>

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $600
                    </Badge>
    <Accordion.Header id= "block1" >Coinbase
    
                    </Accordion.Header>
                    
                    </div>
    <Accordion.Body>
    <ListGroup as="ul" >
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">ADA</div>

                    </div>
                    <Badge bg="success" pill>
                        $300
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">ETH</div>

                    </div>
                    <Badge bg="success" pill>
                        $200
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">BTC</div>

                    </div>
                    <Badge bg="success" pill>
                        $100
                    </Badge>
        </ListGroup.Item>

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $800
                    </Badge>
    <Accordion.Header id= "block1" >TD Ameritrade
    
                    </Accordion.Header>
                    
                    </div>
    <Accordion.Body>
    <ListGroup as="ul" >
        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">APPL</div>

                    </div>
                    <Badge bg="success" pill>
                        $300
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">TSLA</div>

                    </div>
                    <Badge bg="success" pill>
                        $400
                    </Badge>
        </ListGroup.Item>

        <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">BTC</div>

                    </div>
                    <Badge bg="success" pill>
                        $100
                    </Badge>
        </ListGroup.Item>

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<div>
                <h3><strong>Total Value:</strong> $3,300</h3>
            </div>
        </div>
    );
}

export default Portfolios;


/*
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
*/ 