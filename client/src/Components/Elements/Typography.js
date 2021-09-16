import React, { useEffect } from "react";
import AboutHeaderSection from "../About/AboutHeaderSection";
import BlockQuote from "./BlockQuote";
import DividerSection from "./DividerSection";
import ImgFloating from "./ImgFloating";
import ListSample from "./ListSample";

const Typography = () => {
  useEffect(() => {
    document.title = "Typography";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-transparent"
        item1="eLements"
        item2="typography"
      />
      <section className="section section-lg bg-transparent">
        <div className="container">
          <h3 className="text-divider text-offset-1">
            <span className="text-divider-item"></span>Typography Style
          </h3>
          <div className="row row-30">
            <div className="col-xs-6">
              <div className="list list-typography">
                <div className="list-item">
                  <h1>Heading 1</h1>
                </div>
                <div className="list-item">
                  <h2>Heading 2</h2>
                </div>
                <div className="list-item">
                  <h3>Heading 3</h3>
                </div>
                <div className="list-item">
                  <h4>Heading 4</h4>
                </div>
                <div className="list-item">
                  <h5>Heading 5</h5>
                </div>
                <div className="list-item">
                  <h6>Heading 6</h6>
                </div>
                <div className="list-item">
                  <p>Body 1</p>
                </div>
                <div className="list-item">
                  <small>Body 2</small>
                </div>
                <div className="list-item">
                  <div className="xsmall">Body 3</div>
                </div>
                <div className="list-item">
                  <div className="text-caption">Caption</div>
                </div>
                <div className="list-item">
                  <a className="link link-dark link-btn" href="#">
                    Button
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="list list-text">
                <div className="list-item">
                  <p>This is normal text</p>
                </div>
                <div className="list-item">
                  <p className="text-600">This is light text</p>
                </div>
                <div className="list-item">
                  <p className="fw-medium">This is bold text</p>
                </div>
                <div className="list-item">
                  <u>This is emphasized text</u>
                </div>
                <div className="list-item">
                  <p className="big">This is big text</p>
                </div>
                <div className="list-item">
                  <p className="xsmall">This is small text</p>
                </div>
                <div className="list-item">
                  <p className="fw-bold">This is strong text</p>
                </div>
                <div className="list-item">
                  <ins>This is text inserted to the document</ins>
                </div>
                <div className="list-item">
                  <del>This is text deleted from the document</del>
                </div>
                <div className="list-item">
                  <code>This is code text</code>
                </div>
                <div className="list-item">
                  <mark>This is highlighted text</mark>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DividerSection />
      <ListSample />
      <BlockQuote />
      <DividerSection />
      <ImgFloating />
    </>
  );
};

export default Typography;
