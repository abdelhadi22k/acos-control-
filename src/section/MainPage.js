import { Container } from "react-bootstrap";
import { ScrollLink } from "react-scroll";

const MainPage = () => {
  return (
    <section id="home" className="home">
      <Container className="home_container">
        <div className="home_page_info">
          <h1>Welcome to acos</h1>
          <p className="main_paragraph">
          Create your own stunning website or web application
          acos is here to help. We have years of experience in web design
          </p>
        </div>

        <div className="home_page_details">

          <div className="home_page_details_1">
            <p className="details_paragraph">
              Create your own amazing digital product  <br />
              ( website or web application )
            </p>
   
            <a href="#Contact" className="mainBtn1">
            Learn More
            </a>
          </div>

          <div className="home_page_details_2">

            <div className="page_details_1">
              <h5>Experience</h5>
              <h1>+3</h1>
              <p>3+ years experience in UXUI design, web development.</p>
            </div>

            <div className="page_details_2">
              <h5>Completed projects</h5>
              <h1>+60</h1>
              <p>Our team has worked on
              many projects website
               development and UIUX. </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
