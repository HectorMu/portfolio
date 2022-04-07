import {
  Hero,
  Skills,
  HeroShape,
  Projects,
  ProjectsShapeTop,
  ProjectsShapeBottom,
  Contact,
  FooterShapetTop,
  Footer,
} from "./components";

const Portfolio = () => {
  return (
    <>
      <Hero />
      <HeroShape />
      <Skills />
      <ProjectsShapeTop />
      <Projects />
      <ProjectsShapeBottom />
      <Contact />
      <FooterShapetTop />
      <Footer />
    </>
  );
};

export default Portfolio;
