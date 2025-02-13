import React from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import { Product, WishlistItem } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {remove_one_from_Wishlist } from "@/redux/wishlistSlice";
import { remove_all_from_wishlist} from "@/redux/wishlistSlice";
import { addtoCart, remove_whole_from_Cart} from "@/redux/cartSlice";
import { handle_is_added_to_cart, handle_is_removed_from_cart } from "@/redux/productSlice";

const WishlistPage = () => {
  const DUMMY_WISHLIST = useSelector((state: any) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const handle_one_remove = (item: WishlistItem) => {
    dispatch(remove_one_from_Wishlist(item));
  };
  const handle_remove_all = () => {
    dispatch(remove_all_from_wishlist(null));
  };
  const handle_add_to_cart = (item:any) => {
    dispatch(addtoCart(item));
    dispatch(handle_is_added_to_cart(item));
  };
  const handleremovefromCart = (item:any) => {
    dispatch(remove_whole_from_Cart(item));
    dispatch(handle_is_removed_from_cart(item));
  }
  const isAddedtoCart = (item:Product) => {
    const id_array = useSelector((state:any) => state.product.items_in_cart);
    const find_item_id = id_array.find((item_id:number) => item_id === item.id);
    if(find_item_id){
      return true
    }
  }
  if (DUMMY_WISHLIST.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Your wishlist is empty</p>{" "}
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>
        <button
          className="bg-blue-600 text-white py-2 px-3 rounded-xl"
          onClick={() => {
            handle_remove_all();
          }}
        >
          Remove all
        </button>
      </div>
      {DUMMY_WISHLIST.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {DUMMY_WISHLIST.map((item: WishlistItem) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 mt-1">
                        ${item.price}
                      </p>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="p-2 text-gray-400 hover:text-red-500"
                        onClick={() => {
                          handle_one_remove(item);
                        }}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    {isAddedtoCart(item) ? (
                      <div className="flex justify-between mx-2 items-center">
                      <p className="text-green-500">Added to cart</p>
                      <button className="px-4 py-2 bg-blue-600 text-white font-bold w-max rounded-md" onClick={()=>{handleremovefromCart(item)}}>Remove from cart</button>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <button
                          className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                          onClick={() => {
                            handle_add_to_cart(item);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Move to Cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};
export default WishlistPage;
