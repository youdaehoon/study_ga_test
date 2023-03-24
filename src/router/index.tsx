import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
const RouteChangeTracker = () => {
  const location = useLocation();
  console.log(location.pathname);
  const TRACKING_ID = "G-YKNP1MGX41";
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
      setInitialized(true);
    }
  }, []);

  React.useEffect(() => {
    let page = location.pathname;
    let title = "custom title";
    switch (page) {
      case "/":
        title = "home";
        break;
      case "/signup":
        title = "signup";
        break;
        case "/product":
        title = "product";
        break;
        case "/my":
          title = "my";
          break;
      default:
        break;
    }
   
  
    if (initialized) {
      ReactGA.send({
        page: page,
        hitType: "pageview",
        title: title,
      });
    }
  }, [initialized, location]);
};
export default RouteChangeTracker;