// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Alert, Container, Form, Image } from "react-bootstrap";
// Import required modules
import { Pagination } from "swiper/modules";
import OpinionsClient from "./../components/OpinionsClient";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { domain } from "../utils/stn";
import LoadingOpinion from "../components/loading/LoadingOpinion";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Opinions = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(null);

  const [clientName, setClientName] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [ratings, setRating] = useState("");
  const [opinion, setOpinionText] = useState("");

  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  // Fetch opinions on component mount
  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchOpinions();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sanitizeInput = (input) => {
    // نستخدم تعبيراً منتظماً لإزالة الرموز الخاصة
    return input.replace(/[#$<>&*(){}]/g, '');
  };


  const addOpinion = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const respons = await fetch(`${domain}/api/opinion/addOpinion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName,
          JobTitle,
          ratings,
          opinion,
        }),
      });

      const data = await respons.json();

      setSuccess('Opinion added successfully')

     

    } catch (error) {
     
       
        setErr('Error adding your review:')
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "430px",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(sources/img/Testimonials.jpg)",
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
    <div className="opinions" id="testimonials">
      {alert && <div className="alert">{alert}</div>}
      <div className="opinions_info" style={containerStyle}>
        <div style={backgroundStyle}></div>
        <div style={overlayStyle}></div>
        <Container style={contentStyle} className="opinion_info_container">
          <div className="main_info">
            <h1 className="main_info_h1">- Testimonials</h1>
            <h5 className="main_info_h5">
              Opinions and testimonials of our customers
            </h5>
            <div className="main_btn">
              <Fragment>
                <p className="mainBtn1" onClick={handleOpen}>
                  Add Your Opinion
                </p>
                <BootstrapDialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Your Opinion</DialogTitle>
                  <IconButton onClick={handleClose}>X</IconButton>
                  <DialogContent>
                    <Form onSubmit={addOpinion}>
                    {err && <span className="errorM">{err}</span>}
                    <br />
                    {success && <span className="successM">{success}</span>}
                    <br />
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(sanitizeInput(e.target.value))}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Job Title</Form.Label>
                        <Form.Control
                          type="text"
                          value={JobTitle}
                          onChange={(e) => setJobTitle(sanitizeInput(e.target.value))}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          type="number"
                          value={ratings}
                          onChange={(e) => setRating(sanitizeInput(e.target.value))}
                          min="1"
                          max="5"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Opinion</Form.Label>
                        <Form.Control
                          as="textarea"
                          value={opinion}
                          onChange={(e) => setOpinionText(sanitizeInput(e.target.value))}
                          required
                        />
                      </Form.Group>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Form>
                  </DialogContent>
                </BootstrapDialog>
              </Fragment>
             
            </div>
          </div>
        </Container>
      </div>

      <Container className="opinionsContainer">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {loading ? (
            <LoadingOpinion />
          ) : error ? (
            <h1 variant="danger">{error}</h1>
          ) : (
            opinions.map((opinion, index) => (
              <SwiperSlide key={index}>
                <OpinionsClient opinionClient={opinion} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Container>
    </div>
  );
};

export default Opinions;
