import './projects.scss';
import cv_logo from '../../assets/Cv.jpg';
import blogs from '../../assets/blogs.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <h1 data-aos="fade-right">PROJECTS</h1>
      <div className="project-ideas">
        <p data-aos="fade-up-right">
          <a href="https://createpersonalcv.netlify.app/">
            <img src={cv_logo} alt="cv" />
          </a>
        </p>
        <p data-aos="fade-down">
          <a href="https://dashing-sfogliatella-50f68b.netlify.app/">
            <img src={blogs} alt="" />
          </a>
        </p>
        {/* <p data-aos="fade-up-left">project3</p> */}
      </div>
    </div>
  );
};

export default Projects;
