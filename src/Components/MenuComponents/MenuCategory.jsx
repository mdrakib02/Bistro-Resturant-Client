import React from "react";
import MenuItem from "./MenuItem";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, title, coverimg, categories }) {
    console.log(categories)
  return (
    <div>
        {
            title && <Cover img={coverimg} title={title}></Cover>
        }
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 md:my-8 gap-6 lg:my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline">View Details</button></Link>
    </div>
  );
}
