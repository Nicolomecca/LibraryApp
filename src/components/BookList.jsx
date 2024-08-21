import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container,Row,Col,Form } from "react-bootstrap";
class BookList extends Component {
    state ={
        searchValue: '',
    }
  render() {
    return(
        <Container>
            <Row>
                <Col>
                <Form.Control type='text' placeholder="Cerca Un libro" className='my-4'
                value={this.state.searchValue}
                onChange={(e) => {
                    this.setState({
                        searchValue : e.target.value
                    })
                }

                }
                />
                </Col>
            </Row>
            <Row>
                {this.props.ArrayBook.filter((book)=>
                 book.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
                )
                .map(romancebook => (
                    <Col xs={12} md={6} lg={3} className='my-4'> 
                    <SingleBook book={romancebook}/>
                    </Col>
                )
                )}

            </Row>
        </Container>
    )
  }
}
export default BookList
