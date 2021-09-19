import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
// import Pricing from "./Components/Pricing";
import Home from "./Components/Home";
// import AbTeam from "./Components/About/AbTeam";
// import TeamMember from "./Components/About/TeamMember";
// import SingleServices from "./Components/Services/SingleServices";
// import GridNews from "./Components/News/GridNews";
// import ListNews from "./Components/News/ListNews";
// import MasonryNews from "./Components/News/MasonryNews";
// import ModernNews from "./Components/News/ModernNews";
// import SinglePost from "./Components/News/SinglePost";
// import Elements from "./Components/Elements";
// import Shop from "./Components/pages/Shop";
// import List from "./Components/pages/Shop/List";
// import SingleProductCom from "./Components/pages/Shop/SingleProduct/SingleProductCom";
// import Crat from "./Components/Cart";
import NotFount from "./Components/404/NotFount";
// import Checkout from "./Components/pages/Shop/Checkout";
// import Shoping from "./Components/pages/Shop/Shoping";
// import Payment from "./Components/pages/Shop/Payment";
// import Faqs from "./Components/pages/page1/Faqs";
import ContactUs from "./Components/pages/page1/ContactUs";
// import CommingSoon from "./Components/pages/Page2/CommingSoon";
// import PrivacyPolicy from "./Components/pages/Page2/PrivacyPolicy";
// import Search from "./Components/pages/Page2/Search";
// import GridGallery1 from "./Components/Gallery/GridGallery1";
// import GridGallery2 from "./Components/Gallery/GridGallery2";
// import MasonryGallery from "./Components/Gallery/MasonryGallery";
// import CobblesGallery from "./Components/Gallery/CobblesGallery";

// Top Loading Bar
import LoadingBar from "react-top-loading-bar";
import Clients from "./Components/Clients";
import ScrollToTop from "./Components/ScrollToTop";

function Main() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <LoadingBar color="#104a3a" progress={progress} />
        <Switch>
          <Route exact path="/">
            <Home setProgress={setProgress} />
          </Route>
          <Route path="/about">
            <About setProgress={setProgress} />
          </Route>
          {/* <Route path="/team">
            <AbTeam setProgress={setProgress} />
          </Route>
          <Route path="/teamMember">
            <TeamMember setProgress={setProgress} />
          </Route> */}
          <Route path="/services">
            <Services setProgress={setProgress} />
          </Route>
          {/* <Route path="/singleServices">
            <SingleServices setProgress={setProgress} />
          </Route>
          <Route path="/pricing">
            <Pricing setProgress={setProgress} />
          </Route>
          <Route path="/gridNews">
            <GridNews setProgress={setProgress} />
          </Route>
          <Route path="/listNews">
            <ListNews setProgress={setProgress} />
          </Route>
          <Route path="/masonryNews">
            <MasonryNews setProgress={setProgress} />
          </Route>
          <Route path="/modernnews">
            <ModernNews setProgress={setProgress} />
          </Route>
          <Route path="/singlepost">
            <SinglePost setProgress={setProgress} />
          </Route>
          <Route path="/typography">
            <Elements setProgress={setProgress} />
          </Route>
          <Route path="/gridshop">
            <Shop setProgress={setProgress} />
          </Route>
          <Route path="/listshop">
            <List setProgress={setProgress} />
          </Route>
          <Route path="/singleproduct">
            <SingleProductCom setProgress={setProgress} />
          </Route>
          <Route path="/cart">
            <Crat setProgress={setProgress} />
          </Route>
          <Route path="/checkout">
            <Checkout setProgress={setProgress} />
          </Route>
          <Route path="/shipping">
            <Shoping setProgress={setProgress} />
          </Route>
          <Route path="/payment">
            <Payment setProgress={setProgress} />
          </Route>
          <Route path="/faqs">
            <Faqs setProgress={setProgress} />
          </Route>
         
          <Route path="/comingsoon">
            <CommingSoon setProgress={setProgress} />
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy setProgress={setProgress} />
          </Route>
          <Route path="/searchresults">
            <Search setProgress={setProgress} />
          </Route>
          <Route path="/gridgallery1">
            <GridGallery1 setProgress={setProgress} />
          </Route>
          <Route path="/gridgallery2">
            <GridGallery2 setProgress={setProgress} />
          </Route>
          <Route path="/masonrygallery">
            <MasonryGallery setProgress={setProgress} />
          </Route>
          <Route path="/cobblesgallery">
            <CobblesGallery setProgress={setProgress} />
          </Route> */}
          <Route path="/contactus">
            <ContactUs setProgress={setProgress} />
          </Route>
          <Route path="/clients">
            <Clients setProgress={setProgress} />
          </Route>
          <Route path="*">
            <NotFount setProgress={setProgress} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
