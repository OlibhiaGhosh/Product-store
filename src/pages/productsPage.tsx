import React from "react";
import ProductCard from "../components/productCard";
import { Product } from "../types";
import productlist from "@/mockdata/product_list";
import { addtoCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, handle_is_added_to_cart } from "../redux/productSlice";
import { useMemo } from "react";
import { addtoWishlist } from "@/redux/wishlistSlice";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
const ProductsPage = () => {
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(setProducts(productlist));
  }, []);
  const all_products = useSelector((state: any) => state.product.products);
  const handleAddToCart = (product: Product) => {
    dispatch(addtoCart(product));
    dispatch(handle_is_added_to_cart(product));
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch(addtoWishlist(product));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Our Swag Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {all_products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
