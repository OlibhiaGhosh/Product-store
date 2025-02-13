import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@/types";
const initialState = {
  cart_products: [] as CartItem[],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const selected_product: CartItem = action.payload;

      const find_index = state.cart_products.find((item) => {
        return item.id === selected_product.id;
      });
      if (find_index) {
        find_index.quantity += 1;
        find_index.subtotal += selected_product.price;
      } else {
        state.cart_products.push({
          id: selected_product.id,
          name: selected_product.name,
          description: selected_product.description,
          brand: selected_product.brand,
          rating: selected_product.rating,
          category: selected_product.category,
          quantity: 1,
          price: selected_product.price,
          subtotal: selected_product.price,
          image: selected_product.image,
        });
      }
      state.totalPrice += selected_product.price;
      state.totalQuantity += 1;
    },

    remove_one_from_Cart(state, action) {
      const selected_product = action.payload;

      const find_index = state.cart_products.find((item) => {
        return item.id === selected_product.id;
      });

      if (find_index!.quantity > 1) {
        find_index!.quantity -= 1;
        find_index!.subtotal -= selected_product.price;
        state.totalPrice -= selected_product.price;
        state.totalQuantity -= 1;
      }
    },
    remove_whole_from_Cart(state, action) {
      const selected_product = action.payload;
      const find_index: any = state.cart_products.find((item) => {
        return item.id === selected_product.id;
      });
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== selected_product.id
      );
      state.totalPrice -= find_index.subtotal;
      state.totalQuantity -= find_index.quantity;
    },
    remove_all(state, action) {
      state.cart_products.pop();
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addtoCart,
  remove_one_from_Cart,
  remove_whole_from_Cart,
  remove_all,
} = cartSlice.actions;
export default cartSlice.reducer;
