import React from "react";
import ProductItem from "../components/ProductItem.jsx";
import useGetProducts from "../Hooks/useGetProducts";
import styles from "../styles/ProductList.module.css";
import data from "../pages/api/data.js";

const API = data;

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== "") {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
      <div className={styles.ProductList}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== "") {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
      <div className={styles.ProductList}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== "") {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
