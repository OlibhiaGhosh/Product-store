// import React, { useEffect } from "react";
// import productlist from "../mockdata/product_list";
// import { setProducts } from "../redux/productSlice";
// import { useSelector, useDispatch } from "react-redux";
// import ProductCard from "../components/productCard";
// import { Link } from "react-router-dom";
// import { useMemo } from "react";
// const Home = () => {
//   const dispatch = useDispatch();
//   const all_products = useSelector((state:any) => state.product.products)
//   useMemo(() => {
//     dispatch(setProducts(productlist));
//   }, []);

//   return (
//     <div className="px-6 mb-8">
//       <div className="text-center font-bold text-5xl mb-12 mt-8">Swag Store</div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10">
//         {all_products.map((item: any) => (
//           <Link to={`/product-details/${item.id}`} key={item.id}>
//             <ProductCard product={item} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
