import React from "react";
import "./delivery.css";
import FilterComponent from "../commonComponents/filterComponent/filterComponent";
import DeliveryCollections from "./deliveryCollections/deliveryCollections";
import TopBrands from "./topBrands/topBrands";
import ExploreSection from "../commonComponents/exploreSection/exploreSection";
import { restaurants } from "../../data/rstaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Burgers",
  },
  {
    id: 4,
    icon: <i className="fi fi-rr-time-fast absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 5,
    title: "Pure-Veg",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restauranList = restaurants;

const Delivery = () => {
  return (
    <>
      <div className="max-width">
        <FilterComponent filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restauranList}
        collectionName="Delivery Restaurants in Pune"
      />
    </>
  );
};

export default Delivery;
