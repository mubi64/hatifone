import React from "react";
// import { Link } from "react-router-dom";

const LatestCom = (props) => {
  return (
    <>
      <div className="col-xs-10 col-sm-6 col-md-4">
        <article className="post post-boxed">
          <div className="post-heading">
            <a className="post-media" href="/singlepost">
              <img
                className="post-img"
                src={props.img}
                alt=""
                width="370"
                height="220"
              />
            </a>
            <div className="post-tags">
              <a className="post-tag tag tag-secondary" href="news.html">
                News
              </a>
            </div>
          </div>
          <div className="post-body">
            <div className="post-meta">
              <div className="post-meta-item">
                <div className="post-meta-icon mdi mdi-calendar"></div>
                <div className="post-date">May 12, 2021</div>
              </div>
            </div>
            <div className="post-title h4">
              <a href="/singlepost">{props.title}</a>
            </div>
            <div className="post-text">{props.pera}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LatestCom;
