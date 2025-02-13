export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
  }
  
  export interface Product_extended{
    products: Product[];
    items_in_cart: number[];
  }
  export interface CartItem extends Product {
    subtotal: number;
    quantity: number;
    
  }
  export interface WishlistItem extends Product { 
  }
  export interface User {
    email: string;
    name: string;
  }
  
  export interface OrderDetails {
    id:string;
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