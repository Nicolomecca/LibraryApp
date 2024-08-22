
import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    const comment = Object.values(this.props.comment);
    return (
      <ListGroup variant="success">
        {comment.map((comm) => (
          <ListGroup.Item key={comm.elementId}>{comm.rate}|{comm.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;