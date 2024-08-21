import { Card, Container, Row, Col } from "react-bootstrap";
import RomanceBook from '../data/romance.json'

const SingleBook = ({ book }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3} className="mt-2">
          <Card key={book.asin}>
            <Card.Img variant="success" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
