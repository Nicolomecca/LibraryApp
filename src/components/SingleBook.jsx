import { Card } from "react-bootstrap";

const SingleBook = function (props) {
  return (
          <Card className="h-100" key={props.book.asin}>
            <Card.Img variant="success" className="h-75" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
            </Card.Body>
          </Card>
  );
};

export default SingleBook;
