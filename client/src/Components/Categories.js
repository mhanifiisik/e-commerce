import React from "react";

import { categoriesData } from "../FakeData/data";
import Category from "./Category";
const Categories = () => {
  return (
    <div className="">
      <div className="relative grid grid-cols-3 w-full gap-x-5 p-5">
        {categoriesData.map((item) => (
          <Category data={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
