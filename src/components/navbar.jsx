import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart } from "lucide-react";
function Navbar() {
  const no_of_items_in_cart = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="w-full overflow-x-clip sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b flex h-16 items-center justify-between p-4 sm:p-9">
      <Link
        to="/"
        className="font-bold transform transition-transform hover:scale-125"
      >
        Swag Era
      </Link>
      <div className="font-bold flex gap-6 max-md:hidden">
        <Link
          to="/"
          className="transform transition-transform hover:scale-125 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="transform transition-transform hover:scale-125 hover:underline"
        >
          Wishlist
        </Link>
        <Link
          to="/cart"
          className="transform transition-transform hover:scale-125 hover:underline"
        >
          Cart
        </Link>
        <Link
          to="/"
          className="transform transition-transform hover:scale-125 hover:underline"
        >
          Support
        </Link>
      </div>
      <div className="flex items-center gap-10 max-sm:gap-5">
        <Link to="/wishlist" className="sm:hidden">
          <Heart className="h-4 w-4" />
        </Link>
        <div className="relative">
          <Link to="/cart">
            <FaCartPlus
              size={30}
              className="transform transition-transform hover:scale-125"
            />
          </Link>
          {no_of_items_in_cart ? (
            <div className="absolute left-5 bottom-4 text-sm p-1 bg-red-700 text-white text-center rounded-full">
              {no_of_items_in_cart}
            </div>
          ) : null}
        </div>

        <Link to="/signup">
          <div className="px-3 py-2 max-sm:px-2 max-sm:py-1 bg-blue-700 text-white font-bold rounded-md transform transition-transform hover:scale-105">
            SignUp
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
