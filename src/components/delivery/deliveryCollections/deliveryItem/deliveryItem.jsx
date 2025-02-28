import React from "react";
import "./deliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          className="delivery-item-image"
          src={item.cover}
          alt={item.title}
        />
      </div>
      <h3 className="delivery-item-title">{item.title}</h3>
    </div>
  );
};

export default DeliveryItem;
