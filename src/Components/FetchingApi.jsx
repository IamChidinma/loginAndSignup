import React, { useState, useEffect } from "react";
import Categories from "./Categories"; // <--- import Categories component
import "./FetchingApi.css";

const FetchingApi = () => {
  const [products, setProducts] = useState([]); // all products to render
  const [productCategory, setProductCategory] = useState("All"); // selected category
  const [active, setActive] = useState(0); // index of active category button
  const [loading, setLoading] = useState(true); // loading indicator

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const url =
          productCategory === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${encodeURIComponent(
                productCategory
              )}`;

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data); // fakestoreapi returns an array of products
      } catch (err) {
        console.error("Products API Error:", err);
        setProducts([]); // keep UI stable on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productCategory]); // re-run when category changes

  return (
    <div>
      {/* Pass props to Categories */}
      <Categories
        active={active}
        setActive={setActive}
        setProductCategory={setProductCategory}
      />

      {/* Product grid */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="card_wrapper">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map((item) => (
              <div key={item.id} className="product_card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product_img"
                />
                <h3 className="product_title">{item.title}</h3>
                <p className="product_price">${item.price}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FetchingApi;
