import React from "react";

export default function Electronics() {
  const electronicsProducts = [
    {
      id: 1,
      name: "iPhone 12",
      category: "Electronics",
      price: 40000,
      condition: "Used",
      description: "Good condition iPhone 12 with minor scratches, 64GB storage.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "HP Laptop",
      category: "Electronics",
      price: 30000,
      condition: "Used",
      description: "HP Pavilion with 8GB RAM, i5 10th Gen processor.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Sony Headphones",
      category: "Electronics",
      price: 2500,
      condition: "New",
      description: "Noise cancelling headphones, brand new, sealed box.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Electronics</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {electronicsProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)"
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
            <h3 style={{ margin: "10px 0 5px" }}>{item.name}</h3>
            <p style={{ margin: "5px 0" }}>Condition: {item.condition}</p>
            <p style={{ margin: "5px 0" }}>Price: ₹{item.price}</p>
            <p style={{ fontSize: "0.9em", color: "#555" }}>{item.description}</p>
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
}
