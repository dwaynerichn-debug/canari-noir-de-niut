
"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Signature Oversized Tee",
    category: "T-Shirts",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    label: "ESSENTIAL",
  },
  {
    id: 2,
    name: "Essential Street Hoodie",
    category: "Hoodies",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    label: "CORE COLLECTION",
  },
  {
    id: 3,
    name: "Relaxed Utility Cargo",
    category: "Trousers",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=85",
    label: "STREET EDIT",
  },
  {
    id: 4,
    name: "Urban Everyday Tee",
    category: "T-Shirts",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85",
    label: "EVERYDAY LUXURY",
  },
  {
    id: 5,
    name: "Statement Street Hoodie",
    category: "Hoodies",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85",
    label: "STREET EDIT",
  },
  {
    id: 6,
    name: "Relaxed Fit Denim",
    category: "Denim",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    label: "MODERN CLASSICS",
  },
];

const categories = [
  "All",
  "T-Shirts",
  "Hoodies",
  "Trousers",
  "Denim",
];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [bag, setBag] = useState<Record<number, number>>({});
  const [message, setMessage] = useState("");

  const visibleProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const bagCount = Object.values(bag).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const bagTotal = products.reduce(
    (total, product) =>
      total + product.price * (bag[product.id] || 0),
    0
  );

  function addToBag(productId: number, productName: string) {
    setBag((current) => ({
      ...current,
      [productId]: (current[productId] || 0) + 1,
    }));
    setMessage(`${productName} added to your bag.`);
  }

  function updateQuantity(productId: number, change: number) {
    setBag((current) => {
      const nextQuantity = (current[productId] || 0) + change;

      if (nextQuantity <= 0) {
        const updated = { ...current };
        delete updated[productId];
        return updated;
      }

      return { ...current, [productId]: nextQuantity };
    });
    setMessage("");
  }

  function removeFromBag(productId: number) {
    setBag((current) => {
      const updated = { ...current };
      delete updated[productId];
      return updated;
    });
    setMessage("");
  }

  return (
    <main className="shop-page">
      <div className="announcement">
        CANARI NOIR DE NIUT · RISE ABOVE THE ORDINARY.
      </div>

      <header className="navbar">
        <a className="wordmark" href="/" aria-label="Home">
          <span className="wordmark-main">CANARI NOIR</span>
          <span className="wordmark-sub">DE NIUT</span>
        </a>

        <nav className="nav-links" aria-label="Shop navigation">
          <a href="/">HOME</a>
          <a href="#products">SHOP ALL</a>
        </nav>

        <a className="bag-link" href="#bag">
          MY BAG ({bagCount})
        </a>
      </header>

      <section className="shop-hero">
        <p className="eyebrow">THE CANARI COLLECTIONS</p>
        <h1>
          Find your <span>standard.</span>
        </h1>
        <p>
          Contemporary streetwear. Distinctive identity.
          <br />
          Designed for those who choose their own path.
        </p>
      </section>

      <section className="shop-catalog section-padding" id="products">
        <div className="shop-heading">
          <div>
            <p className="eyebrow">CURATED FOR INDIVIDUALITY</p>
            <h2>Explore the edit.</h2>
          </div>
          <span className="product-count">
            {visibleProducts.length} PRODUCTS
          </span>
        </div>

        <div className="category-filters" aria-label="Filter products">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        {message && (
          <p className="bag-message" role="status">
            {message}
          </p>
        )}

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <span className="product-label">{product.label}</span>
              </div>

              <div className="product-info">
                <div>
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    KSh {product.price.toLocaleString("en-KE")}
                  </p>
                </div>

                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => addToBag(product.id, product.name)}
                  aria-label={`Add ${product.name} to bag`}
                >
                  + ADD
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-disclaimer">
          PREVIEW COLLECTION · PRODUCT AVAILABILITY AND PRICES TO BE CONFIRMED.
        </p>
      </section>

      <section className="bag-summary" id="bag">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Your shopping bag</h2>
          <p>
            {bagCount === 0
              ? "Your bag is waiting for something distinctive."
              : `${bagCount} item${bagCount === 1 ? "" : "s"} selected.`}
          </p>
        </div>

        {bagCount > 0 && (
          <div className="bag-items">
            {products
              .filter((product) => (bag[product.id] || 0) > 0)
              .map((product) => (
                <article className="bag-item" key={product.id}>
                  <div>
                    <h3>{product.name}</h3>
                    <p>
                      KSh {product.price.toLocaleString("en-KE")} each
                    </p>
                    <strong>
                      KSh {(product.price * bag[product.id]).toLocaleString("en-KE")}
                    </strong>
                  </div>

                  <div className="bag-item-actions">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                      aria-label={`Decrease ${product.name} quantity`}
                    >
                      −
                    </button>
                    <span>{bag[product.id]}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                      aria-label={`Increase ${product.name} quantity`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromBag(product.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </article>
              ))}
          </div>
        )}

        <div className="bag-total">
          <span>ESTIMATED TOTAL</span>
          <strong>KSh {bagTotal.toLocaleString("en-KE")}</strong>
          <p>Delivery and final prices to be confirmed.</p>
        </div>

        {bagCount > 0 && (
          <button
            type="button"
            className="clear-bag"
            onClick={() => {
              setBag({});
              setMessage("");
            }}
          >
            CLEAR BAG
          </button>
        )}
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="wordmark footer-wordmark" href="/">
            <span className="wordmark-main">CANARI NOIR</span>
            <span className="wordmark-sub">DE NIUT</span>
          </a>
          <p>RISE ABOVE THE ORDINARY.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CANARI NOIR DE NIUT</span>
          <a href="/">BACK TO HOME ↑</a>
        </div>
      </footer>
    </main>
  );
}
