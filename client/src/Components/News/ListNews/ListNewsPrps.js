import React from "react";
// import { Link } from "react-router-dom";

const ListNewsPrps = (props) => {
  return (
    <>
      <div className="post post-list">
        <div className="row row-15">
          <div className="col-md-6">
            <div className="post-heading">
              <a className="post-media" href="/singlepost">
                <img
                  className="post-img"
                  src={props.img}
                  alt=""
                  width="570"
                  height="340"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="post-body">
              <div className="post-meta">
                <div className="post-meta-item">
                  <div className="post-meta-icon mdi mdi-calendar"></div>
                  <div className="post-date">May 12, 2021</div>
                </div>
                <div className="post-meta-item">
                  <div className="post-tags">
                    <a className="post-tag tag tag-secondary" href="news.html">
                      News
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-title h4">
                <a href="/singlepost">{props.title}</a>
              </div>
              <div className="post-text">{props.pera}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListNewsPrps;
