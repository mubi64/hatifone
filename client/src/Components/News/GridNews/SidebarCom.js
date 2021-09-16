import React from "react";

const SidebarCom = () => {
  return (
    <>
      <div className="widget">
        <h6 className="widget-title">Recent posts</h6>
        <div className="widget-body">
          <div className="post post-small">
            <div className="post-title h4">
              <a href="single-post.html">
                Speeding Up Your PC Without Spending a Cent
              </a>
            </div>
            <div className="post-meta">
              <div className="post-meta-item">
                <div className="post-tag text-caption">
                  <a href="#">News</a>
                </div>
              </div>
              <div className="post-meta-item">
                <div className="post-meta-icon mdi mdi-calendar"></div>
                <div className="post-date">September 16, 2021</div>
              </div>
            </div>
          </div>
          <div className="post post-small">
            <div className="post-title h4">
              <a href="single-post.html">Do Macs Get Viruses and Malware?</a>
            </div>
            <div className="post-meta">
              <div className="post-meta-item">
                <div className="post-tag text-caption">
                  <a href="#">News</a>
                </div>
              </div>
              <div className="post-meta-item">
                <div className="post-meta-icon mdi mdi-calendar"></div>
                <div className="post-date">September 16, 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCom;
