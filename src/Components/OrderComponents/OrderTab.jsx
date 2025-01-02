import React from "react";
import OrderMenuCArd from "./OrderMenuCArd";

export default function OrderTab({items}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {
            items.map(item => <OrderMenuCArd item={item} key={item._id}></OrderMenuCArd>)
        }
    </div>
  );
}
