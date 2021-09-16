import React from "react";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <section className="section section-lg bg-transparent text-center">
      <div className="container">
        <h2 className="text-divider">
          <span className="text-divider-item"></span>Why Choose Us
        </h2>
        <p>
          <span className="d-inline-block" style={{ maxWidth: "550px" }}>
            There are dozens of reasons why our clients choose HATIFONE as their
            call center service provider of choice. We can provide you best
            available features for call center software and fully integarated
            CRM.
          </span>
        </p>
        <div className="row row-30 justify-content-center text-lg-start">
          {/* 1 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img src="images/inbound.png" alt="" width="64" height="64" />
              </div>
              <div className="blurb-title h4">Inbound Calls</div>
              <div className="blurb-text">
                Manage your inbound calls in following manners:
                <br />
                • Multiple IVR tree
                <br />
                • Skill based call routing
                <br />
                • Queue management
                <br />• And much more...
              </div>
            </article>
          </div>
          {/* 2 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img src="images/outbound.png" alt="" width="64" height="64" />
              </div>
              <div className="blurb-title h4">Outbound Calls</div>
              <div className="blurb-text">
                • Manual Dial feature, (All buttons on one screen e.g. Dial,
                Hang-up, Conference, Hold.
                <br />• Customized dial plan with respect to regions.
                Restriction upon users to make out of city or internatioan calls
              </div>
            </article>
          </div>
          {/* 3 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img src="images/search.png" alt="" width="64" height="64" />
              </div>
              <div className="blurb-title h4">Recording Search</div>
              <div className="blurb-text">
                • Search recording agent wise
                <br />
                • Search recording bsed on workgroup/ region
                <br />
                • Search from Start to End Date (Month / Day / Year)
                <br />
                • Search from Start Time to End Time (hh : mm) – 24 Hour format
                <br />
                • Agent ID
                <br />
                • Called party number
                <br />• Download easily .wav format
              </div>
            </article>
          </div>
          {/* 4 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img
                  src="images/immigration.png"
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <div className="blurb-title h4">Reports & Dash Board </div>
              <div className="blurb-text">
                • Agent wise calls during a Day/Hour/Month
                <br />
                • Agent specific call recordings.
                <br />
                • Workgroup/ Region / service wise call status.
                <br />
                • Disposition code summary the action code updated based on
                service length
                <br />
                • Successful and attempted calls report
                <br />• Agent wise call duration report (Graphically)
              </div>
            </article>
          </div>
          {/* 5 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img
                  src="images/presentation.png"
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <div className="blurb-title h4">Wall Board for Live Status </div>
              <div className="blurb-text">
                • Call status for all calls
                <br />
                • Agebt wsie live status
                <br />
                • Workgroup/ Regions/ Service wise call status
                <br />
                • Current calls on go status
                <br />• Free agents status
              </div>
            </article>
          </div>
          {/* 6 */}
          <div className="col-sm-6 col-md-4">
            <article className="blurb blurb-boxed">
              <div className="icon blurb-icon">
                <img src="images/team.png" alt="" width="64" height="64" />
              </div>
              <div className="blurb-title h4">Fully Integrated CRM</div>
              <div className="blurb-text">
                • Login ID for each agent
                <br />
                • Option to upload raw data in CRM with duplicate validation
                <br />
                • Option for calling with status dynamic status change option
                <br />
                • Option to dial directly from lead/ customer profile
                <br />
                • Follow up option with different actions required
                <br />
                • Option to book order directly from CRM
                <br />
                • Produt and its quanitity availability
                <br />• Service contract with expiryt date and unit available
              </div>
            </article>
          </div>
        </div>
        <Link
          className="link link-btn link-btn-1"
          to="/contactus"
          data-custom-scroll-to="signUp"
        >
          Sign up for Consultancy{" "}
        </Link>
      </div>
    </section>
  );
};

export default ChooseUs;
