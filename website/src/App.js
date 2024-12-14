import SvgIcon from '@mui/icons-material/ArrowDownward';
import './App.css';
import './styles.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
  return (
    <div className="App">

<div className="heading"><h1>Hi, this is Natasha</h1></div>
      <div className="header">
        
        <div className="about">
          <div id="me">
            <h3>About</h3>
            <p>My name is Natasha and I'm a developer and designer studying computer science and interaction design
               in a unique major called Computational Media at Georgia Tech. 
               The roots of my passion stem from my curiosity and love for storytelling, community building, 
               and interactive experiences.
               <br></br><br></br>
               Born and raised in Hyderabad, India, studying in Atlanta, Georgia and 
               with work experience in different parts of the globe through the Global Citizen Year Academy, Kulfi Beauty, 
               AIonSpectrum and WiTech, I believe in creating local change for global problems through technology, community, 
               and design.
            </p>
          </div>
          <div id="connect">
            <h3>Connect</h3>
            <a href = "https://www.instagram.com/nevermindnatasha/" target= "_blank"><p>Instagram</p></a>
            <a href = "https://www.linkedin.com/in/natashavalluri/" target ="_blank"><p>LinkedIn</p></a>
            <a href = "mailto: nvalluri3@gatech.edu" target = "_blank"><p>Email</p></a>
          </div>
          <div id="recent">
            <h3>Currently...</h3>
            <p>finishing up my capstone work</p>
            <p>getting back into building personal projects</p>
            <p>streaming albums everyday</p>
            <h3>Previously...</h3>
            <p>presenting research on design collaboration</p>
            <p>building an analytics dashboard for a georgia non-profit</p>
            <p>peforming for the rock and pop showcase with my band</p>
          </div>
        </div>

        <div className="header-image-carousel">
          <img src = {"./images/nyc-tv.png"} alt="Net art piece from NYC" />
            <img src = {"./images/me-studying.png"} alt="Natasha locked in at the library" />
            <img src= {"/images/nyc-flowers.png"} alt="Flowers from a market in NYC" />
          </div>

      </div>
      
      <div className="bounce">
          <SvgIcon>
            <ArrowDownwardIcon/> 
          </SvgIcon>
      </div>

      <div className="heading"><h1>Projects</h1></div>
      {/* personal projects section */}
      <div className="project">
        
        <div className="description">
          <h3>Cat Jam</h3>
          <p>Engineered and design a cat-inspired music making web application
            for Horizons, Georgia Tech's Art x Technology hackathon.
          </p>
          <p>Recognitions include: Best Project for Music Technology
          </p>
        </div>
        <div className="image-carousel">
          <img src = {"./images/image1.jpeg"} alt="guy holding up" />
          <img src = {"./images/image2.jpeg"} alt="research" />
          <img src = {"./images/image3.png"} alt="menu" />
        </div>
      </div>

      {/* research section */}
      <div className="project">
        <div className="description">
          <h3>Research</h3>
          <p>Worked on understanding and designing for the language of design
            collaboration, with a focus on project-based learning for undergraduate
            students and industry + non-profit clients.
          </p>
          <p>Recognitions include: Published in SIGDOC 2024 Conference Proceedings, 
            Second Place in the international Student Research Competition for SIGDOC
          </p>
        </div>
        <div className="image-carousel">
          <img src = {"./images/image1.jpeg"} alt="guy holding up" />
          <img src = {"./images/image2.jpeg"} alt="research" />
          <img src = {"./images/image3.png"} alt="menu" />
        </div>
      </div>

      {/* talks section */}
      <div className="project">
        <div className="description">
          <h3>Talks</h3>
          <p>I have had the opportunity to address crowds about everything
            I am interested in, from design thinking to college experiences,
            from Atlanta, US to Manila, PH.
          </p>
          <p>Audiences include: Georgia Tech Freshmen Convocation, etc.
          </p>
        </div>
        <div className="image-carousel">
          <img src = {"./images/image1.jpeg"} alt="guy holding up" />
          <img src = {"./images/image2.jpeg"} alt="research" />
          <img src = {"./images/image3.png"} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default App;
