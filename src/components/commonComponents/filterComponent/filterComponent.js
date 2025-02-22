import React from "react";
import FilterItem from "./filterItem/FilterItem";
import "./filterComponent.css";

const FilterComponent = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return (
            <FilterItem
              className="absolute-center"
              filterName={filter}
              key={filter.id}
            />
          );
        })}
    </div>
  );
};

export default FilterComponent;
