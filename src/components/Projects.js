import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/modernDesign.png";
import projImg2 from "../assets/img/crypto2.png";
import gym from "../assets/img/gym1.png";
import gym2 from "../assets/img/gym22.png";
import dashboard from "../assets/img/dashboard3.png";
import projImg3 from "../assets/img/resturantProject1.png";
import metaverse from "../assets/img/meta1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import hauntedHouse from "../assets/img/haunted-house1.png";
import fallingSnow from "../assets/img/falling-snow.png";
import wave from "../assets/img/wave.png";
import galaxy from "../assets/img/galaxy.png";
import portal from "../assets/img/portal.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "GPT modern landing page",
      description: "#React  #javascript  #css",
      imgUrl: projImg1,
      liveDemoUrl: "https://sara-mohammed96.github.io/modern-gpt3-design-website/",
      githubUrl:"https://github.com/sara-mohammed96/modern-gpt3-design-website"
    },
    {
      title: "Dashboard Admin",
      description: "#React  #MaterialUI ",
      imgUrl: dashboard,
      liveDemoUrl:"https://admin-dashboard-b7m.pages.dev/geography",
      githubUrl:"https://github.com/sara-mohammed96/admin-dashboard"
    },
    {
      title: "Crypto Currency website",
      description: "#React  #javascript  #css",
      imgUrl: projImg2,
      liveDemoUrl:"https://sara-mohammed96.github.io/crypto-currency-app/",
      githubUrl:"https://github.com/sara-mohammed96/crypto-currency-app"
    },
    {
      title: "Restaurant website",
      description: "#React  #javascript  #css",
      imgUrl: projImg3,
      liveDemoUrl:"https://sara-mohammed96.github.io/resturant-project/",
      githubUrl:"https://github.com/sara-mohammed96/resturant-project"
    },
    {
      title: "exercises library",
      description: "#React #css #Javascript",
      imgUrl: gym,
      liveDemoUrl:"https://sara-mohammed96.github.io/gymexercises/",
      githubUrl:"https://github.com/sara-mohammed96/gymexercises"
    },
    {
      title: "EVOgym webpage",
      description: "#Typescript  #Tailwindcss",
      imgUrl: gym2,
      liveDemoUrl:"https://2a6ee04e.fitness-application-3zw.pages.dev/",
      githubUrl:"https://github.com/sara-mohammed96/Fitness-Application"
    },

    
    
  ];



  const projects2 = [
    
    {
      title: "Metaverse animated webpage",
      description: "#NextJs  #FramerMotion  #Tailwindcss",
      imgUrl: metaverse,
      liveDemoUrl:"https://6a309cbc.metaversus-j4c.pages.dev/",
      githubUrl:"https://github.com/sara-mohammed96/metaversus"
    },
    
  ];

  const projects3 = [
    
    {
      title: "Haunted House",
      description: "#THREE JS",
      imgUrl: hauntedHouse,
      liveDemoUrl:"https://haunted-house-threejs-tau.vercel.app/",
      githubUrl:"https://github.com/sara-mohammed96/haunted-house-threejs"
    },
    {
      title: "Falling Snow Particles",
      description: "#THREE JS",
      imgUrl: fallingSnow,
      liveDemoUrl:"https://falling-snow-threejs.vercel.app/",
      githubUrl:"https://github.com/sara-mohammed96/falling-snow-threejs"
    },
    {
      title: "Particles Wave",
      description: "#THREE JS",
      imgUrl: wave,
      liveDemoUrl:"  https://particles-wave-threejs-2dz2p4zae-sara-mohammed96.vercel.app/",
      githubUrl:"https://github.com/sara-mohammed96/particles-wave-threejs"
    },
    {
      title: "Galaxy Particles",
      description: "#THREE JS",
      imgUrl: galaxy,
      liveDemoUrl:"https://galaxy-threejs-seven.vercel.app/",
      githubUrl:"https://github.com/sara-mohammed96/galaxy-threejs"
    },
    {
      title: "Portal secne",
      description: "#React_Three_Fiber",
      imgUrl: portal,
      liveDemoUrl:"https://portal-scene-kzt3r3wek-sara-mohammed96.vercel.app/",
      githubUrl:"https://github.com/sara-mohammed96/portal-scene"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>

        <Row>
          <div>
          
          </div>
        </Row>
        
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}