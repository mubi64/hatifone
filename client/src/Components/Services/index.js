import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Servicescom from "./Servicescom";

const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <>
      <section className="section breadcrumbs-custom bg-transparent">
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Services</li>
          </ul>
        </div>
      </section>
      <Servicescom />
    </>
  );
};

export default Services;
