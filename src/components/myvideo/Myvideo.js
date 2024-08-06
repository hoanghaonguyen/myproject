import React from "react";
import "./myvideo.css";
import video from "../../images/home/bannervideo.mp4";
import banner from "../../images/home/bgr-pic3.png";

const Myvideo = () => {
  return (
    <div className="myvideo">
      <div className="card">
        {/* <video className="card-img-top" autoplay muted loop>
          <source src={video} type="video/mp4" />
        </video> */}

        <img
          src={banner}
          alt=""
          className="card-img-top"
          style={{ height: "100%" }}
        />

        <div className="card-img-overlay">
          <div className="content">
            <h3>Amazing</h3>
            <h1>VIETNAM SAFARI</h1>
            <p>
              Feel closer to nature at Vietnam Safari, discover amazing
              wildlife, learn how we're protecting their future and share
              incredible memories of our leaping, roaring, squawking natural
              world.
            </p>
            <div className="button">
              <a href="discover.html" className="btn">
                DISCOVER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myvideo;
