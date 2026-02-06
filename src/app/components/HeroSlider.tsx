import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/hero-theme.css"; // ONLY theme, not layout

const services = ["A","B","C","D","E","F","G","H","I","J"];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [index]);

  const next = () => {
    const i = (index + 1) % services.length;
    setIndex(i);
    navigate(`/service/${services[i]}`);
  };

  const prev = () => {
    const i = (index - 1 + services.length) % services.length;
    setIndex(i);
    navigate(`/service/${services[i]}`);
  };

  return (
    <Container fluid className="py-5 bg-light position-relative">
      <Button className="slider-arrow start-0" onClick={prev}>❮</Button>

      <Row className="align-items-center px-5">
        <Col md={6}>
          <span className="badge bg-success mb-3">SivantoCapital</span>
          <h1 className="text-success fw-bold">Service {services[index]}</h1>

          <ul className="list-unstyled mt-3">
            <li>✔ Interest rates starting from 10%</li>
            <li>✔ Instant loan sanction</li>
            <li>✔ Part-prepayment available</li>
            <li>✔ Loan up to ₹1 Crore</li>
            <li>✔ T&C Apply</li>
          </ul>

          <div className="mt-4">
            <Button variant="success">Apply Now</Button>
            <Button variant="outline-success" className="ms-3">
              Learn More
            </Button>
          </div>
        </Col>

        <Col md={6} className="text-end">
          <div className="image-circle">
            <img
              src={`/assets/images/${services[index].toLowerCase()}.jpg`}
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>

      <Button className="slider-arrow end-0" onClick={next}>❯</Button>
    </Container>
  );
}
