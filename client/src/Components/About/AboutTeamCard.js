import React from "react";
import { Link } from "react-router-dom";

const AboutTeamCard = (props) => {
  return (
    <>
      <div className="col-sm-6 col-md-3">
        <div className="person person-1">
          <div className="person-media">
            <img
              className="person-img"
              src={props.img}
              alt=""
              width="270"
              height="270"
            />
          </div>
          <div className="person-title h4">
            <Link to="/teammember">{props.name}</Link>
          </div>
          <div className="person-meta">{props.category}</div>
          <div className="person-social">
            <a className={props.class1} href="#"></a>
            <a className={props.class2} href="#"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeamCard;
