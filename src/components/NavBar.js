import cat from "./images/Cat.jpg"
import "./Navbar.css"
import {useState} from "react"
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import resume from "./resume/SivasankarResume.pdf"
// import TextField from '@mui/material/TextField';
import React, { useRef , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Portfolio = () => {

  const [skillsFront,setSkillsFront] = useState(false)
  const [skillsBack,setSkillsBack] = useState(false)

  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])
  




  const openFrontEnd = () =>{

    setSkillsFront(!skillsFront)
  }

  const openBackEnd = () => {
    setSkillsBack(!skillsBack)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8jo746r', 'template_lo95b98', form.current, 'wSMjIEO--8PXJzieH')
      .then((result) => {
          console.log(result.text);
          swal({
            title: "Good job!",
            text: "Message Sent!",
            icon: "success",
            button: "Ok!",
          });
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <div style={{overflowX: "hidden"}}>
   <div id="navi" >
      <div id="navbar">
            <ul className="nav">
            <li className="nav-item">
            <Button variant="contained" size="small" id="btn-nav"><a className="nav-link" href="#education">Eduction</a></Button>
        </li>
        <li className="nav-item">
           <Button variant="contained" size="small" id="btn-nav"><a className="nav-link" href="#h-skill">Skills</a></Button> 
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
            <Button variant="contained" size="small" id="btn-nav"><a className="nav-link" href="#abt" >About</a></Button>
        </li>
        </ul>
      </div>
</div>
<div id="content-div">
    <div id="img-div">
    <img id="img1" src={cat} alt="......"></img>
    </div>
    <div id="bio-div">
      <div id="intro" >
        <h1 id="type"><span>I'm</span> sivasankar</h1>
        <h4>Bachelor Of Sceince</h4>
        <h4>Information Technology</h4>
        <p>I am an energetic, ambitious person who has developed a mature and <br></br> 
          responsible apporoach to any task. I am excellent in working with other <br></br>
          to achive a certain objective on time and with excellence
        </p>
        <Button sx={{boxShadow:"1px 1px 5px 0.2px  gray"}}><a id="con-me"  href="#contactme">Contact Me <SendIcon fontSize="10px"/></a></Button> <br></br>
       <button id="resume"><a href={resume} id="resume-link">Download Cv</a></button>
        </div>
    </div>
   
</div>
<div id="skills" >
    <div id="h-skill" data-aos="fade-up" data-aos-offset="10">
    <h5 id="t-s">My Technical Skills</h5>
    </div> 

<div id="tech-skills"  >
<Button  color="error" id="skill-btn" onClick={openFrontEnd} startIcon={<CodeIcon/>} endIcon={<ArrowDropDownIcon/>}>FrontEnd</Button><br></br><br></br>
{
  skillsFront?

    <div id="front-end">
    <p><b>html</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" >70%</div>
</div>
<p><b>Css</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" >50%</div>
</div>
<p><b>Bootstrap</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" >50%</div>
</div>
<p><b>JavaScript</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" >80%</div>
</div><br></br><br></br>
</div>:" "
}

<Button  id="skill-btn"  onClick={openBackEnd} startIcon={<CodeIcon/>} endIcon={<ArrowDropDownIcon/>}>BackEnd</Button><br></br><br></br>
{
  skillsBack?
<div id="back-end">
    <p><b>React Js</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" >70%</div>
</div>
<p><b>Node Js</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" >60%</div>
</div>
<p><b>MongoDB</b></p>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" >60%</div>
</div>
</div>:" "
}
</div>
</div>
<div id="education">
<div id="h-quali">
  <div id="hh-quali">
<h2 style={{color:"skyblue"}}>Qualification</h2>
<p style={{color:"skyblue"}}><i>my Personal Journy</i></p>
</div>
<h3 style={{color:"skyblue"}}><SchoolIcon id="icon"/> Education</h3>

<div id="edu" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

  <p style={{color:"skyblue"}}><b>Bachelor of Science -Information Technology</b></p>
  <p>CGPA:7.074</p>
  <p>Erode Arts And Science College</p>
  <p><CalendarIcon fontSize="10px"/> 2019-2022</p>
</div>

<div id="edu" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"> 
 <h5 style={{color:"skyblue"}}>SSLC</h5>
<p>Percetage:85.05</p>
<p>TN BOARD</p>
<p><CalendarIcon fontSize="10px"/> 2015-2016</p>
</div>

<div id="edu" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
 <h5 style={{color:"skyblue"}}>HSC</h5>
<p>Percetage:63.02</p>
<p>TN BOARD</p>
<p><CalendarIcon fontSize="10px"/> 2018-2019</p>
</div>
</div>
</div>
<div id="contactme" >
  <div id="cont-me" >
    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="10">
<h4 style={{color:"skyblue"}}>Contact Me</h4>
<p style={{color:"gray"}}><b>Get in touch</b></p>
</div>
<div id="contactId">
  <div data-aos="fade-up-right" data-aos-offset="10">
<h5><CallIcon id="icon"/>  Call Me</h5>
<p>+91 9566631643</p>
</div>
<div data-aos="fade-up-left" data-aos-offset="10">
<h5><EmailIcon id="icon"/>  Email</h5>
<p>sivasankarsiva2001@gmail.com</p>
</div>
<div data-aos="fade-up-right" data-aos-offset="10">
<h5><PlaceIcon id="icon"/>  Location</h5>
<p>pallipalayam Namakkal- 638008</p>
</div>
</div>
</div>
</div>
<div >
  <div id="form">
<form ref={form} onSubmit={sendEmail} id="form-data">
<input id="outlined-basic" data-aos="fade-up-left"  type="text" name="from_name" placeholder="Your Name"  /><br></br><br></br>
<input id="outlined-basic" data-aos="zoom-out-up" type="email" name="to_name" placeholder="Your Email"  /><br></br><br></br>
<textarea rows="7" cols="50" data-aos="zoom-out-right" id="outlined-basic" name="message" type="comment" placeholder="Type Comment....."  /><br></br><br></br>
<Button  variant="contained" type="submit" data-aos="zoom-out-left">Send</Button>
</form>
</div>
</div>
<div id="about" >
  <div id="abt" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> 
  <h4 style={{color:"skyblue"}}>AboutMe</h4>
  <p>A dynamic individual who likes to work<br></br>
     and learn through the challenges of daily<br></br>
      work.My skills were complemented by a<br></br> strong sense of team commitment, solid<br></br> work ethic, eagarness to learn, and<br></br> passion for improving
  </p>
  </div>
</div>
<div id="comlete">
 
    <div id="exp">
      <h3>02+</h3>
      <p>Years Knowledge Experience</p>
    </div>
    <div id="exp">
      <h3>03+</h3>
      <p>Completed Projects  </p>
    </div>
</div>
<div id="footer">
  <div>
<Button id="btn-foot" onClick={()=>window.open("https://www.linkedin.com/in/sivasankar-siva-8693ab218")} ><LinkedInIcon id="icon" fontSize="large"/></Button>
<Button id="btn-foot" onClick={()=>window.open("https://github.com/SivasankarOfficial")} ><GitHubIcon id="icon" fontSize="large"/></Button>
<Button id="btn-foot" onClick={()=>window.open("https://www.instagram.com/_sivasankar_s/")}><InstagramIcon id="icon" fontSize="large"/></Button>
</div>
<br></br><br></br>

<div>

<a id="a1-foot" href="#btn-nav"><HomeIcon id="icon"/>HOME</a>
<a id="a1-foot" href="#h-skill"><ComputerIcon id="icon"/> SKILLS</a>
<a id="a1-foot" href="#contactme"><PhonelinkRingIcon id="icon"/> CONTACT</a>

</div>

</div>

    </div> 
    );
}
 
export default Portfolio;