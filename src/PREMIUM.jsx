import React, { useRef } from "react";
import PremiumMain from "./Premiumfolder/PremiumMain";
import PremiumExperience from "./Premiumfolder/PremiumExperience";
import PremiumPlans from "./Premiumfolder/PremiumPlans";
import PremiumQuestion from "./Premiumfolder/PremiumQuestion";
import Footer from "./Components/Footer";

const PREMIUM = () => {
  let premiumplan = useRef(null);
  let scrollplan = (x) => {
    x.preventDefault();
    premiumplan.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <PremiumMain scrolldata={scrollplan} />
      <PremiumExperience />
      <div ref={premiumplan}>
        <PremiumPlans />
      </div>
      <PremiumQuestion />
      <Footer />
    </div>
  );
};

export default PREMIUM;
