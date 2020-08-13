import React from 'react'
import { Link } from "react-router-dom";
import ProfilePic from "../../media/James.jpg"
import {Button} from 'react-bootstrap'
import "./AboutMe.css"

function AboutMe() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <img
                src={ProfilePic}
                className="card-img-top"
                alt="James Fisher profile pic"
                style={{ width: 300 }}
              />
              <div className="card-body">
                <h3 className="card-title">James Fisher</h3>
                <div className="mainPara">
                  <p className="card-text lead" id="about-me">
                      Web developer with a background in event-technology
                      project-management. Recently earned a certificate in
                      Full-Stack Web Development from University of Washington
                      School of Science and Engineering with skills in HTML, CSS,
                      JavaScript as well as Node, MySQL, Mongo and React.
                      Experience dealing with high client-expectations, high-pressure situations
                      and deadlines and all while being both self-reliant and a
                      member of a team. Excited to develop responsive websites, with
                      a focus on mobile-first design and development, as well as
                      improve and maintain current sites and domains.
                  </p>
                </div>
                <Link to="/contact">
                    <Button variant="dark">Contact James</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default AboutMe