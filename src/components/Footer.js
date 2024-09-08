import React, { useState, useRef, useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div className="Footer">
      <Container>
        <h1 className="mainTitle">
          Let’s <span>Connect</span> there
        </h1>
      </Container>
      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <footer>
        <div className="Created">
          <Container>
            <Row>
              <Col md="6" lg="4" className="CreatedContainer">
                <div className="footerinfo">
                  <img
                    className="footerImg"
                    alt="logoBrand"
                    src="sources/svg/main logo w 3.svg"
                  />
                  <p className="mb-5">
                    Acos Agency is a team specialized in developing and creating
                    websites, and provides its services with design and
                    programming for websites.
                  </p>
                  <div className="copryt">
                    <ul className="d-flex mt-5 list-unstyled gap-3 align-items-center accounts">
                      <li>
                        <a className="d-block text-light" target="blank" href="https://www.facebook.com/people/Acos/100091746498169/">
                          <i className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                        </a>
                      </li>
                      <li>
                        <a className="d-block text-light" target="blank" href="https://www.instagram.com/acos.ag/?hl=ar">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a className="d-block text-light" target="blank" href="https://www.linkedin.com/in/a-cos-701331300/">
                          <i className="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2"></i>
                        </a>
                      </li>
                      <li>
                        <a className="d-block text-light" target="blank" href="https://dribbble.com/abdo_k">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a className="d-block text-light" target="blank" href="https://www.behance.net/cosx">
                          <i className="fa-brands fa-square-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                <div className="footerlinks">
                  <h5 className="sectionTitle">Navigation</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="services"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        services
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        about
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="project"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        project
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        experience
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="Contact"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        contact Us
                      </ScrollLink>
                    </li>

                    <li>
                      <React.Fragment>
                        <p  className="mainLinkf" onClick={handleClickOpen('paper')}>FQAs</p>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">FQAs</DialogTitle>
                          <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                          
                            <Accordion className="AccordionBox" style={{ backgroundColor: '#e56543' }}>
                            <Accordion.Item eventKey="0" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>introduction</h4>
                              </Accordion.Header>
                              <Accordion.Body className="AccordionBody">
                                We seek to provide high-quality services to our customers and
                                achieve their complete satisfaction. Therefore, we have
                                established these policies to ensure smooth and efficient
                                workflow, and to preserve the rights of all parties involved.
                              </Accordion.Body>
                            </Accordion.Item>
                
                            <Accordion.Item eventKey="1" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Service renewal policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 The customer can renew the service under annual, semi-annual,
                                quarterly or monthly contracts.
                                <br />
                                2 The cost of renewal is specified in the contract
                                <br />
                                3 The customer must provide written notice of his desire to
                                renew his website 14 days before the expiration of the current
                                contract.
                                <br />4 If the customer does not provide notice, the services
                                will be considered expired.
                              </Accordion.Body>
                            </Accordion.Item>
                
                            <Accordion.Item eventKey="5" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Amendments policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 Clients are allowed to make limited modifications (depending
                                on the offer) to the work requested.
                                <br />
                                2 Additional fees apply for any additional modifications.
                                <br />
                                3 Required modifications must be communicated to the company
                                within 5 days of receipt of the work.
                                <br />4 The client is deemed to have surrendered his rights to
                                request any amendment 6 days after receiving the work.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Information provision policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 Customers must provide all required information within 5 days
                                from the date of their request.
                                <br />
                                2 If the customer is late in submitting the information beyond
                                the specified period, a notification will be sent to him of the
                                necessity of submitting the information within an additional 2
                                days.
                                <br />3 If the client does not provide the required information
                                within the specified period, the company has the right to cancel
                                the project without any obligations towards the client..
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Payment policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 A down payment of 50% of the total cost must be paid upon
                                agreement
                                <br />
                                2 The second payment of 50% of the total cost must be paid upon
                                delivery of the work
                                <br />
                                3 Required modifications must be communicated to the company
                                within 5 days of receipt of the work.
                                <br />4 In cases of renewal (see the services renewal policy),
                                the full amount must be paid 100% when requesting renewal
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Complaints policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 Complaints must be submitted within 30 days of receipt of work
                                <br />
                                2 Complaints will be investigated and appropriate action will be
                                taken
                                <br />
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Termination policy ?</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                1 Customers can terminate the service at any time provided that
                                the amounts due are paid.
                                <br />
                                2 The company can terminate the service if the customer does not
                                comply with the policies
                                <br />
                                3 In the event that a customer's service is terminated due to a
                                violation of policies, the company does not bear any obligations
                                towards him, including paying dues
                                <br />
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10" className="AccordionItem">
                              <Accordion.Header className="AccordionHeader">
                                <h4>Conclusion</h4>
                              </Accordion.Header>
                              <Accordion.Body>
                                We hope that these policies will help maintain a positive
                                relationship between us and our customers. We are committed to
                                providing the best possible services to our customers.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Done</Button>
                          </DialogActions>
                        </Dialog>
                      </React.Fragment>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                <div className="footerlinks">
                  <h5 className="sectionTitle">Contact</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>+213 (774823948)</li>
                    <li>abdelhadikaba64@<br/>gmail.com</li>
                    <li>Location Algeria - Algeria  (UTC+01:00) </li>
                  </ul>
                </div>
              </Col>

              <Col md="6" lg="4" className="CreatedContainer">
                <div className="footercontect">
                  <h5 className="sectionTitle" style={{ color: "#48CFCB" }}> Let's Start</h5>
                </div>

                <div className="footerInput" style={{ color: "#48CFCB" }}>
                  <a className="mainBtn1" href="#Contact">
                    Get the latest information  <i className="fa-solid fa-paper-plane"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <Container className="FooterContainer">
        <div className="FooterInfo">
          <span>© 2024 acos ( abdelhadi kaba )</span> All rights reserved
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Terms and Conditions</a>
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Privacy Policy</a>
        </div>

        <div className="FooterInfo">
          <a href="/#FAQs">Cookie Policy</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
