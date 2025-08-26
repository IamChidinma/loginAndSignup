import { useState, useEffect } from "react";
import "./Categories.css";
const Categories = ({ setProductCategory, setActive, active }) => {
  const URL = "https://fakestoreapi.com/products/categories";

  const [ProductCategory, setProductCategoryState] = useState([]);

  async function fetchCategories() {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      const categories = ["All", ...data];

      setProductCategoryState(categories);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="Categories_Body">
      <div className="Categories_wrapper">
        {ProductCategory.map((item, index) => (
          <div
            key={index}
            className={`Categories_wrapper_Text ${
              index === active ? "active" : ""
            }`}
            onClick={() => {
              setActive(index);
              setProductCategory(item);
            }}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
