import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NameTitle from "./introduction/NameTitle";
import WorldCloud from "./worldCloud/WorldCloud";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Frontend Developer","Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home" >
      <NameTitle />

      <Container style={{marginTop:'30%'}}>
        <Row className="aligh-items-center">
          <Col xs={10} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Hi! I'm Sarah`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Frontend Developer","Frontend Developer"  ]'><span className="wrap">{text}</span></span></h1>
                  <p>I have Passion for excellence and leaving situations and places better than I found them. My teammates describe me as enthusiastic, high-energy, hard-working, and great for noticing details everyone else missed.
                  I enjoy creating things that live on the internet, My interest in web development started back when i was still high school student started with html and css , and now i have bigger dreams 
                  to be able to focus on building accessible, useful with well written code.
                  </p>
                  <p>I'm well-organized person, Problem solver, Team player with high attention to details, I'm quietly confident, naturally curious to work on improving myself , fan of basketball , outdoor
                    activites , tv series and also cats ..
                  </p>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <WorldCloud />
                </div>}
            </TrackVisibility>
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}