import { Component } from 'react'
import CommentList from './CommentList'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    this.fetchComments()
  }

  fetchComments = () => {
    // fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`)
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
      {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjMwNGYyNjBjYzAwMTVjYzBkZWYiLCJpYXQiOjE3MjQzNTg2NjYsImV4cCI6MTcyNTU2ODI2Nn0.P_HgxXnCmgHu2h_1eHtcKrA6kbvxRVCx4pFMOQJGvh0"
          }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero delle recensioni')
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments)
        this.setState({
          comments: arrayOfComments, // metto le recensioni da API nello stato
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        
        {/* prop drilling: prendo una prop da sopra, SingleBook, a sotto, AddComment */}
      </div>
    )
  }
}

export default CommentArea