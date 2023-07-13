"use client"
import Header from "@/components/Header";
import { headers } from "next/dist/client/components/headers";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [productForm, setProductForm] = useState({});

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/product', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productForm)
      });

      if (response.ok) {
        // product added successfully
        console.log('Product added successfully');
      } else {
        // Handle error case
        console.error('Error adding product')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="container bg-red-100 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search a Product</h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Enter a product name"
            className="border border-gray-300 px-4 w-full"
          />
          <select className="border border-gray-300 px-4 py-2 rounded-r-md">
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* add more options as needed */}
          </select>
        </div>
      </div>

      {/* // Display Current Stock */}
      <div className="container bg-red-50 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add a Product</h1>

        <form>
          <div className="mb-4">
            <table htmlFor="productName" className="block mb-2">
              Product Name
            </table>
            <input
              name="slug"
              onChange={handleChange}
              type="text"
              id="productName"
              className="w-full border border-gray-300 px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <table htmlFor="productName" className="block mb-2">
              Quantity
            </table>
            <input
              name="quantity"
              onChange={handleChange}
              type="text"
              id="productName"
              className="w-full border border-gray-300 px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <table htmlFor="productName" className="block mb-2">
              Price
            </table>
            <input
              name="price"
              onChange={handleChange}
              type="text"
              id="productName"
              className="w-full border border-gray-300 px-4 py-2"
            />
          </div>

          <button
            onClick={addProduct}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="container my-6 bg-red-100 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Display Current Stock</h1>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Product Slug</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* // Sample data */}
            <tr>
              <td className="border px-4 py-2">Procudt A</td>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">$19.99</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Procudt B</td>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">$9.99</td>
            </tr>
            {/* // Add more rows for each product in your stock */}
          </tbody>
        </table>
      </div>
    </>
  );
}
