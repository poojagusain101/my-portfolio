'use client'
import Carousel from 'react-multi-carousel';
// import dynamic from 'next/dynamic';
import 'react-multi-carousel/lib/styles.css';
import "./Skills.css"

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

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
                        <p>Showcasing a versatile skill set crafted through real-world experience, ongoing learning, and a genuine drive to evolve and excel.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">   
                            <div className="item">
                                <img src='/meter1.svg' alt="Image" />
                                <h3>Data Structures</h3>
                            </div>
                            <div className="item">
                                <img src='/meter3.svg' alt="Image" />
                                <h3>C++</h3>
                            </div>
                            <div className="item">
                                <img src='/meter2.svg' alt="Image" />
                                <h3>Python</h3>
                            </div>
                            <div className="item">
                                <img src='/meter3.svg' alt="Image" />
                                <h3>HTML/CSS</h3>
                            </div>
                            <div className="item">
                                <img src='/meter3.svg' alt="Image" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="item">
                                <img src='/meter1.svg' alt="Image" />
                                <h3>ReactJS</h3>
                            </div>
                            <div className="item">
                                <img src='/meter2.svg' alt="Image" />
                                <h3>NextJS</h3>
                            </div>
                          
                            <div className="item">
                                <img src='/meter1.svg' alt="Image" />
                                <h3>Machine Learning</h3>
                            </div>
                            <div className="item">
                                <img src='/meter2.svg' alt="Image" />
                                <h3>Deep Learning</h3>
                            </div>
                            <div className="item">
                                <img src='/meter1.svg' alt="Image" />
                                <h3>OOPS</h3>
                            </div>
                            <div className="item">
                                <img src='/meter3.svg' alt="Image" />
                                <h3>DBMS</h3>
                            </div>
                          
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}