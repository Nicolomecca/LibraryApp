import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentList from "./CommentiList";

class CommentArea extends Component {
  state = {
    comment: {},
  };
  componentDidMount = () => {
    this.fetchRating();
  };

  fetchRating = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjQzMzE4NjEsImV4cCI6MTcyNTU0MTQ2MX0.fajSBGtHoqtte0zHhKXrxQbTyF5tj_tJNcAXBdnEaIA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("la chiamata non è andata a buon fine");
        }
      })
      .then((ObjectOfComment) => {
        console.log("COMMENTI RECUPERATI DAL SERVER", ObjectOfComment);
        this.setState({
          comment: ObjectOfComment,
        });
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
          <CommentList comment={this.state.comment} />
          </Col>
          <Row>
            <Col>{/*AddCommenti*/}</Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
