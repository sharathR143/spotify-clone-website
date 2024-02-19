import React from "react";
import Downloadmain from "./Downloadfolder/Downloadmain";
import Downloadmobile from "./Downloadfolder/Downloadmobile";
import DownloadAccount from "./Downloadfolder/DownloadAccount";
import Footer from "./Components/Footer";

const DOWNLOAD = () => {
  return (
    <div>
      <Downloadmain />
      <Downloadmobile />
      <DownloadAccount />
      <Footer />
    </div>
  );
};

export default DOWNLOAD;
