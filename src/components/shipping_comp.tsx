import React, { useState } from "react";
import "./shipping_style.css";
import { addDetails } from "../redux/shippingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove_all } from "../redux/cartSlice";

function Shipping_comp() {
  const user_details = useSelector((state:any) => state.shipping_details.details);
  const dispatch = useDispatch();
  const no_of_cart_items = useSelector((state:any) => state.cart.totalQuantity);
  const total_price = useSelector((state:any) => state.cart.totalPrice);
  const [orderplaced, isorderPlaced] = useState(false);
  const [details, setDetails] = useState({
    fullname: "",
    phoneno: "",
    email: "",
    adress: "",
    pincode: "",
    state: "",
    cardno: "",
    cardname: "",
    expiry: "",
    cvv: "",
  });
  const onSubmit = () => {
    alert("Are you sure you want to place the order?");
    dispatch(addDetails(details));
    dispatch(remove_all(null));
    isorderPlaced(true);
    console.log(user_details);
  };
  return (
    <>
      {orderplaced ? (
        <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center mt-60 p-8 font-bold text-4xl text-red-700 text-center">Order Placed Successfully<br /> Thanks :)</div>
        <div className="rounded-md bg-blue-600 text-white font-bold p-2 w-48 flex justify-center items-center"> <Link to="/"> Back to Home </Link> </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg flex p-8 gap-8">
          <div className="flex-1">
            <h1 className="font-bold text-2xl font-title text-neutral-950 mb-6">
              Shipping Details
            </h1>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded-md p-2"
                    placeholder="John Doe"
                    value={details.fullname}
                    onChange={(e) =>
                      setDetails({ ...details, fullname: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full border rounded-md p-2"
                    placeholder="1234567890"
                    value={details.phoneno}
                    onChange={(e) =>
                      setDetails({ ...details, phoneno: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-neutral-950 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md p-2"
                  placeholder="example@domain.com"
                  value={details.email}
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm text-neutral-950 mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full border rounded-md p-2"
                  placeholder="123 Elm Street"
                  rows={4}
                  value={details.adress}
                  onChange={(e) =>
                    setDetails({ ...details, adress: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="w-full border rounded-md p-2"
                    placeholder="123456"
                    value={details.pincode}
                    onChange={(e) =>
                      setDetails({ ...details, pincode: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full border rounded-md p-2"
                    placeholder="State name"
                    value={details.state}
                    onChange={(e) =>
                      setDetails({ ...details, state: e.target.value })
                    }
                  />
                </div>
              </div>
              <h2 className="text-xl font-title text-neutral-950 mt-6">
                Payment Details
              </h2>
              <div>
                <label
                  htmlFor="cardnumber"
                  className="block text-sm text-neutral-950 mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardnumber"
                  name="cardnumber"
                  className="w-full border rounded-md p-2"
                  placeholder="1234 5678 9012 3456"
                  value={details.cardno}
                  onChange={(e) =>
                    setDetails({ ...details, cardno: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiry"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    className="w-full border rounded-md p-2"
                    placeholder="MM/YY"
                    value={details.expiry}
                    onChange={(e) =>
                      setDetails({ ...details, expiry: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm text-neutral-950 mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="w-full border rounded-md p-2"
                    placeholder="123"
                    value={details.cvv}
                    onChange={(e) =>
                      setDetails({ ...details, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cardholder"
                  className="block text-sm text-neutral-950 mb-2"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardholder"
                  name="cardholder"
                  className="w-full border rounded-md p-2"
                  placeholder="John Doe"
                  value={details.cardname}
                  onChange={(e) =>
                    setDetails({ ...details, cardname: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white w-full py-2 mt-6 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  {
                    details.fullname != "" &&
                    details.phoneno != "" &&
                    details.email != "" &&
                    details.adress != "" &&
                    details.state != "" &&
                    details.pincode != "" &&
                    details.cardname != "" &&
                    details.cardno != "" &&
                    details.cvv != "" &&
                    details.expiry != ""
                      ? onSubmit()
                      : alert("Please fill all the details");
                  }
                }}
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="flex-1 flex items-center justify-center bg-neutral-100 rounded-lg">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shipping_comp;
