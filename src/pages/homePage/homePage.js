import React, { useState } from "react";
import Footer from "../../components/commonComponents/footer/footer";
import Header from "../../components/commonComponents/header/header";
import TabOptions from "../../components/commonComponents/tabOptions/tabOptions";
import Delivery from "../../components/delivery/delivery";
import DiningOut from "../../components/diningOut/diningOut";
import NightLife from "../../components/nightLife/nightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
