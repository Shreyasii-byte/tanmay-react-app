import React from "react";

// Sample product data (can be imported from a shared data file)
const allProducts = [
  {
    id: 1,
    name: "iPhone 12",
    category: "Electronics",
    price: 40000,
    condition: "Used",
    description: "Good condition, minor scratches",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "HP Laptop",
    category: "Electronics",
    price: 30000,
    condition: "Used",
    description: "8GB RAM, i5 processor",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Denim Jacket",
    category: "Clothing",
    price: 1200,
    condition: "New",
    description: "Stylish denim jacket",
    image: "https://via.placeholder.com/150"
  }
];

export default function Electronics() {
  // Filter products for "Electronics"
  const electronicsProducts = allProducts.filter(
    (product) => product.category === "Electronics"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Electronics</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {electronicsProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "250px"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px"
              }}
            />
            <h3>{item.name}</h3>
            <p>Condition: {item.condition}</p>
            <p>Price: ₹{item.price}</p>
            <p>{item.description}</p>
            <button
              style={{
                marginTop: "10px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
