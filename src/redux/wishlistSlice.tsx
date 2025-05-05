import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistItem } from "@/types";
import toast from "react-hot-toast";

interface WishlistState {
  wishlist: WishlistItem[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtoWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const selected_product = action.payload;
      const exists = state.wishlist.some(
        (item) => item.id === selected_product.id
      );

      if (exists) {
        toast("Already in wishlist", {
          duration: 1000,
          position: "top-center",
          removeDelay: 1000,
        });
        return;
      }

      state.wishlist.push(selected_product);
      toast("Added to wishlist", {
        duration: 1000,
        position: "top-center",
        removeDelay: 1000,
      });
    },
    remove_one_from_Wishlist: (state, action: PayloadAction<WishlistItem>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    remove_all_from_wishlist: (state) => {
      state.wishlist = [];
      alert("Removed all items from wishlist");
    },
  },
});

export const {
  addtoWishlist,
  remove_one_from_Wishlist,
  remove_all_from_wishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
