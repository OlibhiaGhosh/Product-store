import React from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import { Product } from "../types";

const DUMMY_WISHLIST: Product[] = [
  {
    id: 1,
    name: "Classic Logo T-Shirt",
    description: "Comfortable cotton t-shirt with embroidered company logo",
    category: "Apparel",
    brand: "Next Level",
    price: 24.99,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/1450349466/photo/man-wearing-green-t-shirt-with-universal-recycling-symbol-printed-on-chest.jpg?s=2048x2048&w=is&k=20&c=lhRlOJGseVE_ywbUDn4e2QdxGYOPYlVdBEEwTYpkacQ=",
  },
];

const WishlistPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>

      {DUMMY_WISHLIST.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {DUMMY_WISHLIST.map((item) => (
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
                      <button className="p-2 text-gray-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Move to Cart
                    </button>
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