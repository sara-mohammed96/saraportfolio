import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,liveDemoUrl,githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx " >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            
          <a href={liveDemoUrl} target="_blank" rel="noreferrer"><span style={{color:"white",marginRight:"10px",textDecoration:"none"}}>live Demo</span></a>
          <a href={githubUrl} target="_blank" rel="noreferrer"><span style={{color:"white"}}>Github</span></a>
          </div>
        </div>
      </div>
    </Col>
  )
}