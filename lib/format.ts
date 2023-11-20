import React from "react";

const formatPrice = (price: number) => {
  return (price / 100).toLocaleString("en-NG", {
    currency: "NGN",
    style: "currency",
  });
};

export default formatPrice;
