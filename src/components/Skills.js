import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import nodejs from "../assets/img/nodejs.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>The technologies that i have worked on </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="Image" />
                                <h5>Next js</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item" >
                                <img src={nodejs} alt="Image" style={{width:'200px', height:'150px'}}/>
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FE-T9InO--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://thepracticaldev.s3.amazonaws.com/i/cytueiukmj0yyiomk0i3.png" alt="Image" />
                                <h5>Cypress Testing</h5>
                            </div>
                            <div className="item">
                                <img src="https://miro.medium.com/max/800/1*4ElLBnIT7PItm5TGawUBRQ.png" alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" alt="Image" />
                                <h5>Three JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg" alt="Image" style={{width:"100%"}}/>
                                <h5>Tailwindcss (UI)</h5>
                            </div>
                            <div className="item">
                                <img src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="Image" />
                                <h5>MaterialUI (UI)</h5>
                            </div>
                           
                            
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" alt="Image" />
                                <h5>Adobe Xd</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}