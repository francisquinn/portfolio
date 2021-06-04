import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
  return (
    <form action="https://formspree.io/f/xpzkdjrv" method="POST">
      <Container fluid className="grid-contain ">
        <Row className="gy-4 mb-3">
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <input
              type="text"
              name="first"
              required
              className="form-control"
              placeholder="First Name"
            />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <input
              type="text"
              name="last"
              required
              className="form-control"
              placeholder="Surname"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <input
              type="email"
              className="form-control"
              name="_replyto"
              required
              placeholder="Email"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <textarea
              type="text"
              name="message"
              required
              className="form-control"
              placeholder="Message"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <button type="submit">Send</button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Form;
