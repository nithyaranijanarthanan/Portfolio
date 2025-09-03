import React, { useState } from "react";
import "./Portfolio.css";

const portfolioItems = [
  { id: 1, category: "App", image: "p1.jpg" },
  { id: 2, category: "Product", image: "p2.jpg" },
  { id: 3, category: "Branding", image: "p3.jpg" },
  { id: 4, category: "Books", image: "p4.jpg" },
  { id: 5, category: "App", image: "p5.jpg" },
  { id: 6, category: "Product", image: "p6.jpg" },
  { id: 7, category: "Books", image: "p7.jpg" },
  { id: 8, category: "Branding", image: "p8.jpg" },
  { id: 9, category: "App", image: "p9.jpg" },
];

const categories = ["All", "App", "Product", "Branding", "Books"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <p className="portfolio-desc">
        Check out some of my recent work below. I specialize in app design, product branding, and creative books.
      </p>

      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={`/portfolio/${item.image}`} alt={item.category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
