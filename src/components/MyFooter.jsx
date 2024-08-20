
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const MyFooter = () => {
  return (
    <footer className="bg-success text-white mt-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <h5 className='my-3'>About Us</h5>
            <p>
              Discover a world of stories with Infinite Books. Your next adventure awaits!
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 className='my-3'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 className='my-3'>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white mx-2"><FaFacebook /></a>
              <a href="https://twitter.com" className="text-white mx-2"><FaTwitter /></a>
              <a href="https://instagram.com" className="text-white mx-2"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Infinite Books. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;