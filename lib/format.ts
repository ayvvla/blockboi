import React from "react";

const formatPrice = (price: number) => {
  return (price).toLocaleString("en-NG", {
    currency: "NGN",
    style: "currency",
  });
};

export default formatPrice;
