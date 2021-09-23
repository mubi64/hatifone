import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader/Loader";
// import Pricing from "./Components/Pricing";

// import Home from "./Components/Home";
const Home = lazy(() => import("./Components/Home"));

// import Services from "./Components/Services";
const Services = lazy(() => import("./Components/Services"));

// import About from "./Components/About";
const About = lazy(() => import("./Components/About"));

// import Clientspage from "./Components/Clientspage";
const Clientspage = lazy(() => import("./Components/Clientspage"));

// import ContactUs from "./Components/pages/page1/ContactUs";
const ContactUs = lazy(() => import("./Components/pages/page1//ContactUs"));

// import Footer from "./Components/Footer";
const Footer = lazy(() => import("./Components/Footer"));

// import NotFount from "./Components/404/NotFount";
const NotFount = lazy(() => import("./Components/404/NotFount"));

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
// import Checkout from "./Components/pages/Shop/Checkout";
// import Shoping from "./Components/pages/Shop/Shoping";
// import Payment from "./Components/pages/Shop/Payment";
// import Faqs from "./Components/pages/page1/Faqs";
// import CommingSoon from "./Components/pages/Page2/CommingSoon";
// import PrivacyPolicy from "./Components/pages/Page2/PrivacyPolicy";
// import Search from "./Components/pages/Page2/Search";
// import GridGallery1 from "./Components/Gallery/GridGallery1";
// import GridGallery2 from "./Components/Gallery/GridGallery2";
// import MasonryGallery from "./Components/Gallery/MasonryGallery";
// import CobblesGallery from "./Components/Gallery/CobblesGallery";

function Main() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/clients">
              <Clientspage />
            </Route>
            <Route path="*">
              <NotFount />
            </Route>
            {/* <Route path="/team">
            <AbTeam />
          </Route>
          <Route path="/teamMember">
            <TeamMember />
          </Route> */}
            {/* <Route path="/singleServices">
            <SingleServices />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/gridNews">
            <GridNews />
          </Route>
          <Route path="/listNews">
            <ListNews />
          </Route>
          <Route path="/masonryNews">
            <MasonryNews />
          </Route>
          <Route path="/modernnews">
            <ModernNews />
          </Route>
          <Route path="/singlepost">
            <SinglePost />
          </Route>
          <Route path="/typography">
            <Elements />
          </Route>
          <Route path="/gridshop">
            <Shop />
          </Route>
          <Route path="/listshop">
            <List />
          </Route>
          <Route path="/singleproduct">
            <SingleProductCom />
          </Route>
          <Route path="/cart">
            <Crat />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/shipping">
            <Shoping />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
         
          <Route path="/comingsoon">
            <CommingSoon />
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/searchresults">
            <Search />
          </Route>
          <Route path="/gridgallery1">
            <GridGallery1 />
          </Route>
          <Route path="/gridgallery2">
            <GridGallery2 />
          </Route>
          <Route path="/masonrygallery">
            <MasonryGallery />
          </Route>
          <Route path="/cobblesgallery">
            <CobblesGallery />
          </Route> */}
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default Main;
