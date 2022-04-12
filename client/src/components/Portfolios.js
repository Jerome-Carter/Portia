import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Badge } from 'react-bootstrap/';

function Portfolios() {
    return (
        <div className="Portfolios">
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

export default Portfolios;