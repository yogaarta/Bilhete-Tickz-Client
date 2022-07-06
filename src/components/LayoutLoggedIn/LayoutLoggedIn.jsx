//NextComponent
import Head from "next/head";
//Css
import Styles from "../../styles/Home.module.css";
//React Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
const LayoutLoggedIn = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar className="text-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">BILHETE TICKZ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex justify-content-between">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#link">Cinemas</Nav.Link>
                <Nav.Link href="#link">Buy Ticket</Nav.Link>
              </Nav>
              <div className="d-flex gap-3">
                <div className={`${Styles.dropDownNav}`}>
                  Location
                </div>
                <div className={`${Styles.searchNav}`}>
                  Location
                </div>
                <div className={`${Styles.signButton}`}>
                  Sign Up
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </div>
    </>
  );
};

export default LayoutLoggedIn;
