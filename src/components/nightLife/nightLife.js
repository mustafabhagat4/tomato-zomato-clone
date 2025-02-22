import React from "react";
import { nightLife } from "../../data/nightLife";
import Collection from "../commonComponents/collections/collection";
import "./nightLife.css";
import FilterComponent from "../commonComponents/filterComponent/filterComponent";
import ExploreSection from "../commonComponents/exploreSection/exploreSection";

const nightLifeFilters = [
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
    title: "Distance",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,
    title: "pubs and bars",
  },
];

const nightLifeCollection = [
  {
    id: 1,
    title: "Buzzing Nightlife and Clubs",
    cover:
      "https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665493873.jpg?output-format=webp",
    places: "14 Places",
  },
];

const nightLifeList = nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={nightLifeCollection} />
      <div className="max-width">
        <FilterComponent filterList={nightLifeFilters} />
      </div>
      <ExploreSection
        list={nightLifeList}
        collectionName={"Nightlife in Pune"}
      />
    </div>
  );
};

export default NightLife;
