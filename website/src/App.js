import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import SvgIcon from "@mui/icons-material/ArrowDownward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./App.css";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [hoverContent, setHoverContent] = useState({
    type: null,
    content: null,
  });

  const handleMouseEnter = (content, type = "text") => {
    setHoverContent({ type, content });
  };

  const handleMouseLeave = () => {
    setHoverContent({ type: null, content: null });
  };

  const renderHoverContent = () => {
    if (!hoverContent.content) return null;

    return (
      <div className="hover-center">
        {hoverContent.type === "text" ? (
          <h1 className="hover-text">{hoverContent.content}</h1>
        ) : (
          <img
            src={hoverContent.content}
            alt="Project preview"
            className="hover-content"
          />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="heading">
        <h1>Natasha Valluri</h1>
      </div>

      <div className="header">
        <div className="about">
          <div id="me">
            <h3>About</h3>
            <p>
              Natasha is a full-stack developer, designer, and artist from
              Hyderabad, India, currently based in Atlanta, GA interested in
              creativity, collaboration, and community.
            </p>
            <p onClick={() => navigate("/about")}>Learn more</p>
            <h3>Connect</h3>
            <a
              href="https://www.instagram.com/nevermindnatasha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/in/natashavalluri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LinkedIn</p>
            </a>
            <a href="mailto:nvalluri3@gatech.edu">
              <p>Email</p>
            </a>
          </div>

          <div id="recent">
            <h3>Currently...</h3>
            <ul>
              <li>finishing up my capstone work</li>
              <li>getting back into building personal projects</li>
              <li>streaming albums everyday</li>
            </ul>
            <h3>Previously...</h3>
            <ul>
              <li>presenting research on design collaboration</li>
              <li>building an analytics dashboard for a georgia non-profit</li>
              <li>peforming for the rock and pop showcase with my band</li>
            </ul>
          </div>
        </div>

        <div className="header-image-carousel">
          <img src="./images/nyc-tv.png" alt="Net art piece from NYC" />
          <img
            src="./images/me-studying.png"
            alt="Natasha locked in at the library"
          />
          <img
            src="/images/nyc-flowers.png"
            alt="Flowers from a market in NYC"
          />
        </div>
      </div>

      <div className="bounce">
        <SvgIcon>
          <ArrowDownwardIcon />
        </SvgIcon>
      </div>

      <div className="heading">
        <h1>Project Index</h1>
      </div>

      <div className="i">
        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/jennifer-anns-project.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Jennifer Ann's Group</h3>
            <p id="tags">Webdev</p>
            <p>
              content management system for an award-winning non-profit that
              educates teens about dating violence.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/research-poster.jpeg", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Designing collaboration</h3>
            <p id="tags">Design research</p>
            <p>
              framework for interaction design collaboration between students
              and industry clients.
            </p>
            <p>
              research published in ACM SIGDOC proceedings. student research
              competition winner, 2nd place.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/stickers.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Pride Alliance</h3>
            <p id="tags">Brand Design</p>
            <p>
              designed stickers, merchandise, social media posts for georgia
              tech's largest LGBTQIA+ organization.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("WiTech", "text")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://witechblog.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="description">
              <h3>WiTech</h3>
              <p id="tags">Organization</p>
              <p>
                community of technologies united to achieve gender and
                socioeconomic equality globally. founded in the Philipines.
              </p>
            </div>
          </a>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("Cat Jam", "text")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://catjam.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="description">
              <h3>Cat Jam</h3>
              <p id="tags">Webdev</p>
              <p>
                web application to play instruments and hear cat sounds.
                hackathon project, best music tech project.
              </p>
              <p>figma, react, tailwind css, FL studio.</p>
            </div>
          </a>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("./images/Orange.png", "image")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Orange</h3>
            <p id="tags">UI/UX Design</p>
            <p>
              prototype to teach social-emotional learning to middle-school
              students.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("Artists' CV", "text")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://docs.google.com/document/d/1DdWPtVIFuQ4BDnZSl5cKXW9XtSSeNC2zM9WHMAGFE_g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="description">
              <h3>Artists' CV</h3>
              <p id="tags"></p>
              <p>what I'm upto (regularly updated)</p>
            </div>
          </a>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("Mini Media", "text")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://minimedia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="description">
              <h3>Mini Media</h3>
              <p id="tags">Webdev</p>
              <p>tracking all forms of media I (mini) consume.</p>
              <p>summer personal project.</p>
            </div>
          </a>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter(
              "Representations, Media and Asian Americans",
              "text"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://lmc.gatech.edu/projects/contemporary-media-representations-asian-americans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="description">
              <h3>Representations, Media and Asian Americans</h3>
              <p id="tags">Zine</p>
              <p>
                research-driven zine on contemporary representations of asian
                americans in media.
              </p>
              <p>
                selected as a key class project to showcase from the
                computational media major.
              </p>
            </div>
          </a>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("read with me, every thought", "text")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Read with me, every thought</h3>
            <p id="tags">Webdev</p>
            <p>personal project, under construction.</p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/bubble-wrap.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Bubble Wrap</h3>
            <p id="tags">Speculative Design</p>
            <p>
              on censorship, vandalism as dissent and growing divisiveness.
              speculative design fiction capstone.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/blender-comic.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Home is far away</h3>
            <p id="tags">2D & 3D</p>
            <p>comic based on life changing and missing home.</p>
            <p>2D art on Procreate. 3D modeling on Blender.</p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() => handleMouseEnter("Every cafe I lived in", "text")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Every Cafe</h3>
            <p id="tags">Webdev</p>
            <p>personal project, under construction.</p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/stickers.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Stickers</h3>
            <p id="tags">2D Art</p>
            <p>stickers doodled. some gifted, some sold.</p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/stickers.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>How to Fix Problems</h3>
            <p id="tags">Talk</p>
            <p>
              UX Research and Product Design workshop for Ateneo de Manila
              University's Hackfest 2024.
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/stickers.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Youth for Leadership Panel</h3>
            <p id="tags">Talk</p>
            <p>
              panel on leadership and collaboration in the industry and
              non-profit space, attended by 2,500+ students in the John Clements
              Consulting office in the Philippines
            </p>
          </div>
        </div>

        <div
          className="project"
          data-info
          onMouseEnter={() =>
            handleMouseEnter("./images/stickers.png", "image")
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="description">
            <h3>Second Year Speaker for Freshmen Convocation</h3>
            <p id="tags">Talk</p>
            <p>
              delivered a talk on the college experience to the largest incoming
              freshmen (4,000+) at Georgia Tech, selected from the rising
              sophomore class.
            </p>
          </div>
        </div>

        {renderHoverContent()}
      </div>
    </>
  );
};

const About = () => {
  return <h3>About Page</h3>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
