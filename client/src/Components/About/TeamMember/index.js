import React, { useEffect } from "react";
import AboutHeaderSection from "../AboutHeaderSection";
import TeamMemberSec from "./TeamMemberSec";

const TeamMember = () => {
  useEffect(() => {
    document.title = "Team Member";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        link="/about"
        item1="ABOUT"
        item2="TEAM MEMBER"
      />
      <TeamMemberSec />
    </>
  );
};

export default TeamMember;
