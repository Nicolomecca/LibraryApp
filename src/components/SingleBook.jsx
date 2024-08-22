import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state={
    selected : false,
  }
  render() {
    return (
      <>
      <Card className={`h-100${this.state.selected? 'border border-2 border-danger' : ''}`} key={this.props.book.asin}>
        <Card.Img variant="success" className="h-75" src={this.props.book.img} 
        onClick={()=>{
          this.setState({
            selected: !this.state.selected,
          })
        }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      </>
    );
  }
}

export default SingleBook;
