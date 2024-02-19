import React, { useEffect, useState } from "react";
// import Nav from "./Components/Nav";
import { useLocation } from "react-router-dom";

const Home = ({ children }) => {
  // const location = useLocation();
  const location2 = useLocation();
  const [shownavbar, setShownavbar] = useState(true);

  useEffect(() => {
    console.log("this locations", location2);
    if (location2.pathname === "/SUPPORT") {
      setShownavbar(false);
    } else if (location2.pathname === "/SIGNUP") {
      setShownavbar(false);
    } else if (location2.pathname === "/LOGIN") {
      setShownavbar(false);
    } else if (location2.pathname === "/ENTERHOME") {
      setShownavbar(false);
    } else {
      setShownavbar(true);
    }
  }, [location2]);

  return (
    <div>
      {/* {location.pathname !== "/SUPPORT" ? <Nav /> : ""} */}
      {shownavbar && children}
    </div>
  );
};

export default Home;
