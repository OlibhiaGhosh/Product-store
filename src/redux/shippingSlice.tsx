import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderDetails } from "@/types";

interface ShippingState {
  details: OrderDetails[];
}

const initialState: ShippingState = {
  details: [],
};

const shippingSlice = createSlice({
  name: "shipping_details",
  initialState,
  reducers: {
    addDetails: (state, action: PayloadAction<OrderDetails>) => {
      const details = action.payload;
      const exists = state.details.some((user) => user.id === details.id);

      if (!exists) {
        state.details.push({
          id: details.id || Date.now().toString(),
          fullname: details.fullname,
          phoneno: details.phoneno,
          email: details.email,
          address: details.address,
          pincode: details.pincode,
          state: details.state,
          cardno: details.cardno,
          cardname: details.cardname,
          expiry: details.expiry,
          cvv: details.cvv,
        });
      } else {
        alert("User already exists");
      }
    },
  },
});

export const { addDetails } = shippingSlice.actions;
export default shippingSlice.reducer;
