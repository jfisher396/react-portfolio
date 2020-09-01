import React from "react";
import ProfilePic from "../../media/James.jpg";

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card contactCard">
            <img
              src={ProfilePic}
              className="card-img-top"
              alt="James Fisher profile pic"
            />
            <div className="card-body">
              <h3 className="card-title">Contact</h3>
              <p className="link card-text lead">
                <strong>Phone: </strong>206-715-7688
              </p>
              <p className="card-text lead">
                <strong>Email: </strong>
                <a className="link" href="mailto:jfisher396@hotmail.com">
                  jfisher396@hotmail.com
                </a>
              </p>

              <p className="card-text lead">
                <strong>Twitter: </strong>
                <a
                  className="link"
                  href="https://twitter.com/Jaymz396"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Jaymz396
                </a>
              </p>
              <p className="card-text lead">
                <strong>Linked In: </strong>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/jameslincolnfisher/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jameslincolnfisher
                </a>
              </p>
              <p className="card-text lead">
                <strong>Github: </strong>
                <a
                  className="link"
                  href="https://github.com/jfisher396"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jfisher396
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
