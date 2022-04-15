import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Badge, Accordion} from 'react-bootstrap/';
import './Portfolios.css';

function Assets() {
    return (
        <div className="Portfolios">
            <Accordion>
  
  <Accordion.Item eventKey="0">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $1,200
                    </Badge>
    <Accordion.Header id= "block1" >Stocks
    
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
                        $650
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

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
      <div id ="block_container">
      <Badge bg="success" pill id="block2">
                        $700
                    </Badge>
    <Accordion.Header id= "block1" >Crypto
    
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
                        $200
                    </Badge>
        </ListGroup.Item>

    </ListGroup>
    </Accordion.Body>
  </Accordion.Item>

  
</Accordion>
            <div>
                <h3><strong>Total Value:</strong> $1,900</h3>
            </div>
        </div>
    );
}

export default Assets;