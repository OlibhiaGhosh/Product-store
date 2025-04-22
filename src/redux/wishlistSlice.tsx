import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistItem } from "@/types";

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
        alert("Already added to wishlist");
        return;
      }

      state.wishlist.push(selected_product);
      alert("Added to wishlist");
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
