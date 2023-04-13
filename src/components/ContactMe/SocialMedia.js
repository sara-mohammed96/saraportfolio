import './ContactStyle.css'
import '../../App.css'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';


function SocialMedia() {
  return (
    <span className="ContainerIcons">
    <div className="social-icon1">
      <a target="_blank" href="https://www.linkedin.com/in/sarah-allateef/"><img src={navIcon1} alt="" /></a>
      <a target="_blank" href="https://twitter.com/cloudysara26"><img src={navIcon2} alt="" /></a>
      <a target="_blank" href="https://instagram.com/clou.dx26?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
    </div>
   
  </span>
  );
}

export default SocialMedia;
