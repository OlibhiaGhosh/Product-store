import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  remove_one_from_Cart,
  remove_whole_from_Cart,
} from "../redux/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart_items = useSelector((state: any) => state.cart.cart_products);
  const no_of_cart_items = useSelector((state: any) => state.cart.totalQuantity);
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
  return (
    <div className="px-6">
      <div className="text-4xl font-bold text-center my-8">
        Your Shopping Cart
      </div>
      {no_of_cart_items ? (
        <div className="whole-cart flex gap-48">
          <div className="cart-list mt-8 w-full md:w-1/2">
            <div className="p-4 grid grid-cols-6 justify-between gap-12 font-bold bg-slate-300 border-2 border-gray-400">
              <div>Image</div>
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
            {cart_items.map((item: any) => (
              <div
                key={item.id}
                className="p-4 grid grid-cols-6 justify-between gap-12 border-b-2 border-x-2 border-gray-400"
              >
                <img src={item.image} alt="" width={100} />
                <div>{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <div className="flex">
                  {item.quantity > 1 ? (
                    <div
                      className="h-max border-y-2 border-l-2 border-gray-400 p-1 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handle_each_item_delete(item);
                      }}
                    >
                      -
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="h-max border-2 border-gray-400 py-1 px-2">
                    {item.quantity}
                  </div>
                  <div
                    className="h-max border-y-2 border-r-2 border-gray-400 p-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handle_item_add(item);
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="font-semibold">
                  ${item.totalPrice.toFixed(2)}
                </div>
                <div
                  className="font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handle_whole_item_delete(item);
                  }}
                >
                  <MdDeleteForever size={25} />
                </div>
              </div>
            ))}
          </div>
          <div className="final_cart w-96 bg-blue-200 flex flex-col justify-center align-middle gap-y-4 mt-8 border-2 border-gray-300 p-9 rounded-md">
            <div className="text-center text-2xl font-bold pb-2">
              Place your order
            </div>
            <div className="flex justify-between">
              <div>Total items:</div> <div>{no_of_cart_items}</div>
            </div>
            <div className="flex justify-between">
              <div>Total price:</div> <div>{total_price.toFixed(2)}</div>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <div>Shipping Total:</div> <div>{total_price.toFixed(2)}</div>
            </div>
            <hr />
            <div className="flex justify-center mt-8">
              <Link
                to="/shipping"
                className="bg-blue-700 text-white px-4 py-2 font-bold rounded-md"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-60 p-8 font-bold text-2xl text-red-700">
          Your Cart is empty :){" "}
        </div>
      )}
    </div>
  );
}

export default Cart;
