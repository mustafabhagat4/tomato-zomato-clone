import React from "react";
import "./diningOut.css";
import Collection from "../commonComponents/collections/collection";
import { diningOut } from "../../data/diningOut";

import ExploreSection from "../commonComponents/exploreSection/exploreSection";
import FilterComponent from "../commonComponents/filterComponent/filterComponent";

const collectionList = [
  {
    id: 1,
    title: "Romantic Places",
    cover:
      "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665492991.jpg?output-format=webp",
    places: "14 Places",
  },
  {
    id: 2,
    title: "Great Buffets",
    cover:
      "https://b.zmtcdn.com/data/collections/b64b5994cba7120fd820351832bfc2b4_1665491156.jpg?output-format=webp",
    places: "11 Places",
  },
  {
    id: 3,
    title: "Buzzing Nightlife and Clubs",
    cover:
      "https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665493873.jpg?output-format=webp",
    places: "20 Places",
  },
  {
    id: 4,
    title: "Insta Worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/aab50558180da225560f5aaa4dbe7d30_1665496174.jpg?output-format=webp",
    places: "15 Places",
  },
  {
    id: 5,
    title: "Luxury at its BEST",
    cover:
      "https://b.zmtcdn.com/data/collections/4ac24b02c823d846cb1a852f421689ca_1665492655.jpg?output-format=webp",
    places: "10 Places",
  },
  {
    id: 6,
    title: "Exotic Cocktails",
    cover:
      "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg?output-format=webp",
    places: "9 Places",
  },
  {
    id: 6,
    title: "Legends of Delhi",
    cover:
      "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg?output-format=webp",
    places: "17 Places",
  },
  {
    id: 6,
    title: "World on Your Plate",
    cover:
      "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg?output-format=webp",
    places: "13 Places",
  },
];

const diningFilters = [
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
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,
    title: "Open Now",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />;
      <div className="max-width">
        <FilterComponent filterList={diningFilters} />
      </div>
      <ExploreSection
        collectionName={"Dine-out Restaurants in Pune"}
        list={diningList}
      />
    </div>
  );
};

export default DiningOut;
