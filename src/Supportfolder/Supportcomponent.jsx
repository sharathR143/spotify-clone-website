import React from "react";
import Supportmain from "./Supportmain";
import Supportvist from "./Supportvist";
import Supportquick from "./Supportquick";
const Supportcomponent = ({ movedataComponent }) => {
  return (
    <div>
      <Supportmain />
      <Supportquick movechildComponent={movedataComponent} />
      <Supportvist />
    </div>
  );
};

export default Supportcomponent;
