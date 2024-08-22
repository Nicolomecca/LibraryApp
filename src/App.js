import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LibraryNavbar from "./components/LibraryNavbar";
import LibraryAlert from "./components/LibraryAlert";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import romancebook from'./data/romance.json';
import BookList from'./components/BookList';
import CommentArea from "./components/CommentArea";
function App() {
  return (
    <>
      <header>
        <LibraryNavbar />
      </header>
      <main>
        {/* <SingleBook book={romancebook[0]}/> */}
        <CommentArea/>
        <BookList ArrayBook={romancebook}/>
        <LibraryAlert />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
