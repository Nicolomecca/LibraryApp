import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LibraryNavbar from './components/LibraryNavbar';
import LibraryAlert from './components/LibraryAlert';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';


function App() {
  return (
    <> 
    <header>
      <LibraryNavbar />
    </header>
    <main>
      <LibraryAlert />
      <AllTheBooks/>

    </main>
    <footer>
      <MyFooter/>
    </footer>
    </>
  
  )
}

export default App;
