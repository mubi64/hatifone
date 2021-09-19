import React, { useEffect } from "react";
import Page1Header from "../pages/page1/Page1Header";
import ClientsCom from "./ClientsCom";

const Clients = () => {
  useEffect(() => {
    document.title = "Client";
  }, []);

  return (
    <>
      <Page1Header
        active="Contact us"
        className="section breadcrumbs-custom bg-transparent"
      />
      <ClientsCom />
    </>
  );
};

export default Clients;
