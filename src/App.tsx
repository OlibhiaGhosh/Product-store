import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import CartPage from "./pages/cart";
import Shipping from "./pages/shipping";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetailsPage from "./pages/productDetailsPage";
import { Suspense } from "react";
import CheckoutPage from "./pages/checkoutPage";
import WishlistPage from "./pages/wishlistPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
const Home = React.lazy(() => import("./pages/productsPage"));

function App() {
  const { id } = useParams();
  const product = useSelector((state: any) =>
    state.product.products.find((item: any) => item.id === id)
  );
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
