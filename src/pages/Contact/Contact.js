import React from "react";
import ProfilePic from "../../media/James.jpg"

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src={ProfilePic}
              className="card-img-top"
              alt="James Fisher profile pic"
            />
            <div className="card-body">
              <h3 className="card-title">Contact</h3>
              <p className="link card-text lead"><strong>Phone: </strong>206-715-7688</p>
              <p class="card-text lead"><strong>Email: </strong><a className="link" href="mailto:jfisher396@hotmail.com">
                  jfisher396@hotmail.com
                </a></p>
              <p className="card-text lead"><strong>Twitter: </strong><a class="link" href="https://twitter.com/Jaymz396" target="_blank">
                  @Jaymz396
                </a></p>
              <p className="card-text lead">
                <strong>Linked In: </strong>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/jameslincolnfisher/"
                  target="_blank"
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
