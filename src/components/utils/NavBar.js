import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand>
          <ScrollLink
            className="mainLink"
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <img alt="logoBrand" src="sources/svg/main logo w 3.svg"></img>
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id='responsive' />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
          <Nav className="linkContainer">

          <ScrollLink
              className="mainLink"
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
            >
              about us <div></div>{" "}
            </ScrollLink>

            <ScrollLink
              className="mainLink"
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
            > 
              {" "}
              services<div></div>{" "}
            </ScrollLink>
            
            <ScrollLink
              className="mainLink"
              to="project"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              project <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="experience"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              experience <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              testimonials <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="blog"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              blog <div></div>{" "}
            </ScrollLink>
        
            <ScrollLink
              className="mainLink"
              to="Contact"
              smooth={true}
              duration={500}
              offset={-100}
            >
              contact Us <div></div>{" "}
            </ScrollLink>
            <Link className="mainLink" to='Admin-acos-12333'>
            Admin page  <div></div>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
