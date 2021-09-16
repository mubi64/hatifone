import React from "react";

const BlockText = () => {
  return (
    <>
      <blockquote className="quote">
        <div className="icon quote-icon mdi mdi-format-quote"></div>
        <q className="quote-text lead">
          HATIF ONE is a modern call center/ contact center software solution
          which eliminate the old fashioned & hardware-based PBX telephony. Here
          you can setup your own rule while monitoring your staff on run time.
          You can see on your computer or mobile (optional) on going inbound and
          outbound calls, missed call reports, call recordings and free agents.
          There is much more.
        </q>
        <cite className="quote-cite text-caption">
          - Virginia Turner, Client
        </cite>
      </blockquote>
    </>
  );
};

export default BlockText;
