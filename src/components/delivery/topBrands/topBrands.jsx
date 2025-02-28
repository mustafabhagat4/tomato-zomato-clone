import React from "react";
import NextArrow from "../../commonComponents/carousel/nextArrow";
import PrevArrow from "../../commonComponents/carousel/prevArrow";
import "./topBrands.css";
import Slider from "react-slick";

const brandList = [
  {
    id: 2,
    title: "Domino's Pizza",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
  },
  {
    id: 3,
    title: "Burger King",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
  },
  {
    id: 4,
    title: "Subway",
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
  },
  {
    id: 5,
    title: "Haldirams's",
    time: "33 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
  },
  {
    id: 6,
    title: "Punjabi Angithi",
    time: "36 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/deb3eec101dbc1ccc3cd238d15a04e1b_1641558038.png?output-format=webp",
  },
  {
    id: 7,
    title: "KFC",
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
  },
  {
    id: 8,
    title: "LaPino's Pizz",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
  },
  {
    id: 9,
    title: "BikanerWala",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
  },
  {
    id: 10,
    title: "Pizza Hut",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return (
            <div className="top-brand-container">
              <div className="brand-image-container">
                <div className="brand-title-time">
                  <img
                    src={brand.cover}
                    className="top-brand-image"
                    alt="brand.title"
                  />
                </div>

                <div className="brand-title">{brand.title}</div>
                <div className="brand-time">{brand.time}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
