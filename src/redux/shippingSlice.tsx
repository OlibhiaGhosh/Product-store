import { createSlice, nanoid } from "@reduxjs/toolkit";
import { OrderDetails } from "@/types";
interface Detail {
  id: string;
  fullname: string;
  phoneno: string;
  email: string;
  address: string;
  pincode: string;
  state: string;
  cardno: string;
  cardname: string;
  expiry: string;
  cvv: string;
}

const initialState: { details: OrderDetails[] } = {
  details: [],
};

const shippingSlice = createSlice({
  name: "shipping_details",
  initialState,
  reducers: {
    addDetails(state, action) {
      const details = action.payload;

      const find_user = state.details.find((user) => {
        return user.id === details.id;
      });

      if (!find_user) {
        state.details.push({
          id: nanoid(1),
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
      }
    },
  },
});

export const { addDetails } = shippingSlice.actions;
export default shippingSlice.reducer;
