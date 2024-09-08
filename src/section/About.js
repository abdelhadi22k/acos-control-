import { Container } from "react-bootstrap";

const About = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "290px",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(sources/img/About.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    color: "white",
    padding: "20px",
    textAlign: "center", 
  };

  return (
    <section id="about" className="about">
      <Container className="about_container">
        <div className="main_info">
          <h1 className="main_info_h1">- About us</h1>
          <h5 className="main_info_h5">What is acos agency</h5>
          <p className="main_info_p">
            The agency features a specialized team of developers and web
            designers who have extensive experience in the fields of design and
            programming.
          </p>
    
        </div>

        <div className="about_details">
          <div className="about_details_box">
            <h5>
              {" "}
              <i className="fa-solid fa-code"></i> Practical websites
            </h5>
            <p>
            Custom website design, responsive development, and seamless user experience.
            </p>
          </div>
          <div className="about_details_box">
            <h5>
              <i className="fa-brands fa-uikit"></i> Creative uiux designs
            </h5>
            <p>
            Professional and personalized & Creative UIUX designs for you
            </p>
          </div>
          <div className="about_details_box">
            <h5>
            <i className="fa-solid fa-magnifying-glass"></i> Seo support
            </h5>
            <p>
            Improve your website's visibility in search engines to increase visitors and improve rankings.
            </p>
          </div>
        </div>
      </Container>

      <div className="about_info" style={containerStyle}>
        <div style={backgroundStyle}></div>
        <div style={overlayStyle}></div>
        <Container style={contentStyle} className="about_info_container">
          <div>
            <h1>+16</h1>
            <h6>Happy customer</h6>
          </div>
          <div>
            <h1>+38</h1>
            <h6>Completed projects</h6>
          </div>
          <div>
            <h1>+3</h1>
            <h6>Experiences</h6>
          </div>
          <div>
            <h1>05</h1>
            <h6>Team members</h6>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default About;
