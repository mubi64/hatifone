import React, { useState } from "react";
import Page1Header from "../pages/page1/Page1Header";
import ClientApi from "./ClientsApi";
import ClientsCom from "./ClientsCom";

const Clients = () => {
  const [img] = useState(ClientApi);
  return (
    <>
      <Page1Header
        active="Contact us"
        className="section breadcrumbs-custom bg-transparent"
      />
      <ClientsCom img={img} />
    </>
  );
};

export default Clients;
