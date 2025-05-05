// import React, { lazy } from "react";
// import { FaStar } from "react-icons/fa";
// import { addtoCart } from "../redux/cartSlice";
// import { useDispatch } from "react-redux";

// function ProductCard({product}: any) {
//   const dispatch = useDispatch();
//   const handleaddtoCart = (product:any) => {
//     dispatch(addtoCart(product));
//     alert("Added to cart successfully");
//   };
//   return (
//     <div className="container rounded-md shadow-lg shadow-cyan-500 transform transition-transform hover:scale-105">
//       <div className="content p-2">
//         <img src={product.image} alt="" loading="lazy"/>
//         <div className="font-bold text-xl">{product.name}</div>
//         <div className="py-1 flex items-center gap-2">
//           {product.rating} <FaStar />
//         </div>
//         <div className="flex justify-between py-2">
//           <div className="font-bold text-xl">${product.price}</div>
//           <div
//             className="font-bold bg-blue-700 px-2 rounded-full transform transition-transform hover:scale-105"
//             onClick={(e) => {
//               e.preventDefault();
//               handleaddtoCart(product);
//             }}
//           >
//             +
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Product, Product_extended } from "../types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove_whole_from_Cart } from "@/redux/cartSlice";
import { handle_is_removed_from_cart } from "@/redux/productSlice";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}
const ProductCard = ({
  product,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) => {
  const dispatch = useDispatch()
  const id_array = useSelector((state: any) => state.product.items_in_cart);
  const isAddedtoCart = (item: Product) => {
    const find_item_id = id_array.find(
      (item_id: number) => item_id === item.id
    );
    return !!find_item_id;
  };
  const handle_tobe_removed_from_cart = (item:Product) =>{
    dispatch(remove_whole_from_Cart(item));
    dispatch(handle_is_removed_from_cart(item))
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
        </Link>
        <Link to={`/product/${product.id}`}>
          <p className="text-gray-600 mt-1">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        </Link>

        <div className="mt-4 flex justify-between">
          {isAddedtoCart(product) ? (
            <button className="flex items-center px-3 py-2 rounded-md bg-red-700 text-white" onClick={() => handle_tobe_removed_from_cart(product)}>
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </button>
          )}

          <button
            onClick={() => onAddToWishlist(product)}
            className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
