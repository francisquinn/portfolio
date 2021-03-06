import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import { gsap } from "gsap";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    gsap.set("#about-image", { autoAlpha: 1 });
    gsap.from("#about-image", { opacity: 0, x: -100, duration: 1 });

    gsap.set("#about-text", { autoAlpha: 1 });
    gsap.from("#about-text", { opacity: 0, x: 100, duration: 1 });
  }, []);
  return (
    <div className="about">
      <Title title="About Me" />
      <br />
      <Container fluid className="contain mb-5">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div id="about-text">
              <p>
                My name is Francis Quinn. I'm a 23 year old computing graduate
                from Ireland.
              </p>
              <p>
                I have recently acquired a BSc (Hons) in Computing from Dundalk
                Institute of Technology.
              </p>
              <p>
                Throughout my course, I have worked on various projects using a
                wide range of technologies both individually and as part of a
                group.
              </p>
              <p>
                I gained experience in the mobile cyber security sector as part
                of an ERASMUS Internship programe in Treviso, Italy.
              </p>
              <p>
                I am looking forward to my future job prospects in the
                computing industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
