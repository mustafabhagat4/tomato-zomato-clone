import React from "react";
import "./filterItem.css";

const FilterItem = ({ filterName }) => {
  return (
    <div className="filter-item">
      {filterName.icon && filterName.icon}
      <div className="filter-name">{filterName.title}</div>
    </div>
  );
};

export default FilterItem;
