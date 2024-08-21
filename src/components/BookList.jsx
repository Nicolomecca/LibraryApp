import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import RomanceBooks from '../data/romance.json'; 

const BookList = () => {
  return (
    <Container>
      <Row>
        {RomanceBooks.map((book) => (
          <Col xs={12} md={12} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;