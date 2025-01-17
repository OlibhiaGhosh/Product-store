// import React from "react";
// import { Suspense } from "react";
// const Cart = React.lazy(() => import("../components/cart_comp"));
// function CartPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Cart />
//     </Suspense>
//   );
// }

// export default CartPage;
import React from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { CartItem } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  remove_one_from_Cart,
  remove_whole_from_Cart,
} from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart_items = useSelector((state: any) => state.cart.cart_products);
  const no_of_cart_items = useSelector(
    (state: any) => state.cart.totalQuantity
  );
  const total_price = useSelector((state: any) => state.cart.totalPrice);

  const handle_item_add = (item: any) => {
    dispatch(addtoCart(item));
  };

  const handle_each_item_delete = (item: any) => {
    dispatch(remove_one_from_Cart(item));
  };

  const handle_whole_item_delete = (item: any) => {
    dispatch(remove_whole_from_Cart(item));
  };
  // const total = cart_items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      {cart_items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {cart_items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 font-bold">${item.price}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button className="px-2 py-1 border rounded" onClick={() => handle_each_item_delete(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => handle_item_add(item)}>+</button>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={() => handle_whole_item_delete(item)}>
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Quantity</span>
                  <span>{no_of_cart_items}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total_price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total_price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};
export default CartPage