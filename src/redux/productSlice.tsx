import { Product, Product_extended } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product_extended = {
    products: [],
    items_in_cart: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setProducts: (state: { products: Product[] }, action) => {
            state.products = action.payload
        },
        handle_is_added_to_cart: (state , action) => {
            const item:Product = action.payload;
            const find_item = state.items_in_cart.find((item_id:number) => item_id === action.payload.id);
            if(!find_item){state.items_in_cart.push(item.id);}
            console.log("isAdddedtoCart", item);
            
        },
        handle_is_removed_from_cart: (state, action) => {
            const index = state.items_in_cart.findIndex((item) => item === action.payload.id);
            state.items_in_cart.splice(index, 1);
        }
    }
})

export const {setProducts, handle_is_added_to_cart, handle_is_removed_from_cart} = productSlice.actions
export default productSlice.reducer