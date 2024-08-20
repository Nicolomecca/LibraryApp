import{Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
const LibraryNavbar = function(){
    return (
        <Navbar collapseOnSelect expand="md" bg="success" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">INFINITE BOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default LibraryNavbar