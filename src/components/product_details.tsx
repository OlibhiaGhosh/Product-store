import React from "react";

import "./productdetails_style.css";

const Product_details = ({product}: any) => {
  return (
	<div> 
					<div className="w-full bg-white rounded-lg shadow-lg p-8">  <div className="flex flex-wrap gap-6">
			<img
			  src={product.image}
			  alt="Product"
			  className="w-full lg:w-[400px] h-[400px] object-cover rounded-md"
			/>
			<div className="flex flex-col gap-6 flex-grow">
			  <div className="flex justify-between items-center">
				<h1 className="text-4xl font-title text-neutral-950">{product.name}</h1>
				<button className="w-[48px] h-[48px] flex items-center justify-center bg-neutral-200 rounded-full">
				  <span className="material-symbols-outlined text-neutral-950">favorite</span>
				</button>
			  </div>
			  <p className="text-neutral-700 text-lg leading-relaxed">
				{product.details}
			  </p>
			  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
				<div className="flex items-center gap-2">
				  <span className="text-2xl font-semibold text-primary-500">${product.price}</span>
				</div>
				<div className="flex items-center gap-1">
				  <span className="material-symbols-outlined text-yellow-500">star</span>
				  <span className="material-symbols-outlined text-yellow-500">star</span>
				  <span className="material-symbols-outlined text-yellow-500">star</span>
				  <span className="material-symbols-outlined text-yellow-500">star</span>
				  <span className="material-symbols-outlined text-neutral-400">star</span>
				  <span className="text-neutral-950">{product.rating}</span>
				</div>
			  </div>
			  <div className="flex items-center gap-4">
				<button className="w-[48px] h-[48px] flex items-center justify-center bg-neutral-200 rounded-full">
				  <span className="material-symbols-outlined text-neutral-950">remove</span>
				</button>
				<span className="text-xl text-neutral-950">1</span>
				<button className="w-[48px] h-[48px] flex items-center justify-center bg-neutral-200 rounded-full">
				  <span className="material-symbols-outlined text-neutral-950">add</span>
				</button>
				<span className="text-neutral-950">{product.quantity}</span>
			  </div>
			  <div className="flex flex-wrap gap-4">
				<button className="flex-1 bg-primary-500 rounded-full py-3 text-primary-50 text-center">
				  Add to Cart
				</button>
				<button className="flex-1 bg-primary-500 rounded-full py-3 text-primary-50 text-center">
				  Buy Now
				</button>
			  </div>
			</div>
		  </div>
		</div> 
				</div>
  )
}

export default Product_details;

