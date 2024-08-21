import { Container,Row,Card,Button,Col } from 'react-bootstrap'
import horrorbooks from'../data/horror.json'
const AllTheBooks = function(){
    return (
        <Container>
            <Row>
                {horrorbooks.map((book) =>{
                    return (
                        <Col xs={12} md={3} className='mt-2'>
                     <Card className='h-100 ' key={book.asin}>
                    <Card.Img variant="top" className='h-75' src={book.img}/>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        {book.category}
                      </Card.Text>
                      <Button variant="success">Detail</Button>
                    </Card.Body>
                  </Card>
                  </Col>
                    )

                }
                )}              

            </Row>
        </Container>
    )

}
export default AllTheBooks