import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { stat } from "fs";

const initialState = {
  wishlist: [] as Product[],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtoWishlist(state, action) {
      const selected_product:Product = action.payload;

      const find_index = state.wishlist.find((item) => {
        return item.id === selected_product.id;
      });

      if (find_index) {
        alert("Already added to wishlist")
      } else {
        state.wishlist.push({
          id: selected_product.id,
          name: selected_product.name,
          description: selected_product.description,
          brand:selected_product.brand,
          rating:selected_product.rating,
          category:selected_product.category,
          price: selected_product.price,
          image: selected_product.image,
        });
        alert("Added to wishlist");
      }
    },
    remove_one_from_Wishlist(state, action) {
      const selected_product = action.payload;

      state.wishlist = state.wishlist.filter(item => item.id !== selected_product.id);
    },
    remove_all_from_wishlist(state, action) {
        state.wishlist = [];
    }
  },
});

export const { addtoWishlist, remove_one_from_Wishlist, remove_all_from_wishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;