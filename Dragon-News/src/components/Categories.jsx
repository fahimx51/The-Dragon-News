import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
.then(res => res.json());

const Categories = () => {

    const category = use(categoryPromise);


    const categoryStyle = ({ isActive }) =>
      isActive ? "btn" : "btn bg-transparent border-0 text-accent";


    return (
      <div>
        <h1 className="font-semibold  text-primary text-2xl mb-5">
          All Categories
        </h1>

        <div className="grid grid-cols-1 gap-3">
          {category.map((singleItem) => (
            <NavLink
              className={categoryStyle}
              to={`/category/${singleItem.id}`}
              key={singleItem.id}
            >
              {singleItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categories;