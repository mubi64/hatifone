import React from "react";
import { Link } from "react-router-dom";

const GridPropsCom = (props) => {
  return (
    <>
      <div className="col-xs-10 col-sm-6">
        <article className="post post-boxed">
          <div className="post-heading">
            <Link className="post-media" to="/singlepost">
              <img
                className="post-img"
                src={props.img}
                alt=""
                width="370"
                height="220"
              />
            </Link>
            <div className="post-tags">
              <a className="post-tag tag tag-secondary" href="#">
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
              <Link to="/singlepost">{props.title}</Link>
            </div>
            <div className="post-text">{props.pera}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default GridPropsCom;
