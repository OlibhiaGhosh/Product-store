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
  
  export interface CartItem extends Product {
    totalPrice: number;
    quantity: number;
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