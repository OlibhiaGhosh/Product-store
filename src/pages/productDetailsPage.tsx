import React from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "../types";
import { useSelector } from "react-redux";
import { addtoCart, remove_whole_from_Cart } from "@/redux/cartSlice";
import {
  handle_is_added_to_cart,
  handle_is_removed_from_cart,
} from "@/redux/productSlice";
import { addtoWishlist } from "@/redux/wishlistSlice";
import { useDispatch } from "react-redux";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const all_products = useSelector((state: any) => state.product.products);
  const product = all_products.find((p: Product) => p.id === parseInt(id!));
  const id_array = useSelector((state: any) => state.product.items_in_cart);
  const isAddedtoCart = (item: Product) => {
    const find_item_id = id_array.find(
      (item_id: number) => item_id === item.id
    );
    return !!find_item_id;
  };
  const handleAddToCart = (product: Product) => {
    dispatch(addtoCart(product));
    dispatch(handle_is_added_to_cart(product));
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch(addtoWishlist(product));
  };
  const handle_tobe_removed_from_cart = (item: Product) => {
    dispatch(remove_whole_from_Cart(item));
    dispatch(handle_is_removed_from_cart(item));
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Product not found</p>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mt-2">
              ${product.price}
            </p>
          </div>

          <div className="border-t border-b py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex space-x-4">
            {isAddedtoCart(product) ? (
              <button
                className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700"
                onClick={() => {
                  handle_tobe_removed_from_cart(product);
                }}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Remove from Cart
              </button>
            ) : (
              <button
                className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            )}
            <button
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => {
                handleAddToWishlist(product);
              }}
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-900">
              Product Details
            </h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>Premium quality materials</li>
              <li>Machine washable</li>
              <li>Available in multiple sizes</li>
              <li>Free shipping on orders over $50</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsPage;

function dispatch(arg0: { payload: any; type: "cart/addtoCart" }) {
  throw new Error("Function not implemented.");
}
