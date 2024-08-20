import{Alert, Container, Row,Col} from 'react-bootstrap'
const LibraryAlert = function (){
    return (
        <Container>
            <Row className='justify-content-center my-4'> 
                <Col xs={12} md={5} >
        <Alert variant="success">
      <Alert.Heading className='d-flex justify-content-center'>Hey, Welcome to the Infinite Books</Alert.Heading>
      <hr />
      <p className='d-flex justify-content-center'>
        Where every page tells a story
      </p>
    </Alert>
    </Col>
    </Row>
    </Container>
  );
}
export default LibraryAlert