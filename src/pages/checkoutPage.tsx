import React, { useState } from "react";
import { addDetails } from "../redux/shippingSlice";
import { useDispatch, useSelector } from "react-redux";
import { remove_all } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [orderplaced, isorderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullname: "",
    phoneno: "",
    email: "",
    address: "",
    pincode: "",
    state: "",
    cardno: "",
    cardname: "",
    expiry: "",
    cvv: "",
  });
  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to place the order?")) {
      const details = {
        ...orderDetails,
        id: Date.now().toString(),
      };
      dispatch(addDetails(details));
      dispatch(remove_all());
      isorderPlaced(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {orderplaced ? (
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center mt-60 p-8 font-bold text-4xl text-red-700 text-center">
            Order Placed Successfully
            <br /> Thanks :)
          </div>
          <div className="rounded-md bg-blue-600 text-white font-bold p-2 w-48 flex justify-center items-center">
            {" "}
            <Link to="/"> Back to Home </Link>{" "}
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullname"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={orderDetails.fullname}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={orderDetails.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={orderDetails.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.state}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PIN Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.pincode}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneno"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phoneno"
                    name="phoneno"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.phoneno}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr />
              <div className="font-bold text-xl">Payment Details</div>
              <div>
                <label
                  htmlFor="cardname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Holder Name
                </label>
                <input
                  type="text"
                  id="cardname"
                  name="cardname"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={orderDetails.cardname}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="Card Number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="Card Number"
                    name="cardno"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.cardno}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.expiry}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={orderDetails.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  (orderDetails.fullname != "" &&
                  orderDetails.phoneno != "" &&
                  orderDetails.email != "" &&
                  orderDetails.address != "" &&
                  orderDetails.state != "" &&
                  orderDetails.pincode != "" &&
                  orderDetails.cardname != "" &&
                  orderDetails.cardno != "" &&
                  orderDetails.cvv != "" &&
                  orderDetails.expiry != "")
                    ? handleSubmit()
                    : alert("Please fill all the details");
                }}
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default CheckoutPage;
