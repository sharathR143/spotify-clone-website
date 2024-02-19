import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
// import Supportmain from "./Supportfolder/Supportmain";
// import Supportvist from "./Supportfolder/Supportvist";
// import Supportquick from "./Supportfolder/Supportquick";
// import Quickpayment from "./Supportquickfolder/Quickpayment";
import Quicklogindetail from "./Supportquickfolder/Quicklogindetail";
import Supportcomponent from "./Supportfolder/Supportcomponent";
import { useState } from "react";

const SUPPORT = () => {
  const [showMovingComponent, setShowMovingComponent] = useState(true);

  const moveComponent = () => {
    setShowMovingComponent(false);
    console.log("false");
  };

  const moveBack = (e) => {
    e.preventDefault();
    setShowMovingComponent(true);
    console.log("true");
  };

  return (
    <div className=" bg-gradient-to-t from-neutral-900 from-70% via-neutral-900  via-52% to-green-700 to-100% w-96 sm:w-auto  ">
      <Nav />
      {/* <Supportmain />
      <Supportquick />
      <Supportvist /> */}

      <div>
        {showMovingComponent ? (
          <Supportcomponent movedataComponent={moveComponent} />
        ) : (
          <Quicklogindetail moveBack={moveBack} />
        )}
      </div>
      {/* <div>
          {showMovingComponent ? (
            <Supportcomponent movedataComponent2={moveComponent2} />
          ) : (
            <Quickpayment move2={moveBack} />
          )}
        </div> */}

      <Footer />
    </div>
  );
};

export default SUPPORT;
