// App.jsx

import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import TabsAccordion from "./components/TabsAccordion";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    brand: "Nike",
    title: "Running Sneakers",
    price: "$80",
    oldPrice: "$120",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    brand: "Adidas",
    title: "Sports Shoes",
    price: "$95",
    oldPrice: "$150",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
    brand: "Puma",
    title: "Casual Sneakers",
    price: "$70",
    oldPrice: "$110",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
    brand: "Reebok",
    title: "Training Shoes",
    price: "$85",
    oldPrice: "$130",
  },
];

function App() {
  return (
    <div>
      <HeroSlider />

      <section className="products-section container">
        <h2 className="section-heading">Heading</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <TabsAccordion />
    </div>
  );
}

export default App;