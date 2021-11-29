import React from "react";
import ServicesCard from "../Components/Services/ServicesCard";

export default function ServCards() {
  return (
    <>
      <ServicesCard
        img="images/image1.png"
        title="Software Solution"
        pera="HATIFONE will provide you its call center solution
              software with full traning and go live. You can run your
              inhouse call center with the help of HATIFONE software
              where we will be at your back to support you all the time.
              You can access all reports anytime."
        // price="Price up to $20."
      />
      <ServicesCard
        img="images/image2.png"
        title="Software Solution + Agent"
        pera="HATIFONE will outsource your call center complelety where
              you do not need to hire your inhouse agents or setup call
              center. You can get all report on run time where there is
              a possibility to provide specific report on mobile app on
              demand too."
        // price="Price up to $20."
      />
      <ServicesCard
        img="images/image3.png"
        title="Software Solution + CRM"
        pera="All functionalities of call center software solution + CRM where you can upload raw data of leads in CRM which is fully connected with call center software. Upon login, agent can see all the previous history of calls and sales for specific number, if done in past."
        // price="From $10."
      />
    </>
  );
}
