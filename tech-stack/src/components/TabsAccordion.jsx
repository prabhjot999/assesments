// components/TabsAccordion.jsx

import { useState } from "react";

const tabData = [
  {
    title: "landing page ",
    content:
      "this landing page is built using react and swiper js for the slider. it has a responsive design and mdoern look.",
  },
  {
    title: "products",
    content:
      "there are 4 product list of shoes ",
  },
  {
    title: "price",
    content:
      "Select product first.",
  },
];

function TabsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="tabs-section container">
      <div
        className="tabs-header"
        role="tablist"
      >
        {tabData.map((tab, index) => (
          <button
            key={index}
            role="tab"
            className={
              activeIndex === index
                ? "tab-btn active-tab"
                : "tab-btn"
            }
            onClick={() => handleToggle(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabData[activeIndex].content}
      </div>

      <div className="accordion-mobile">
        {tabData.map((item, index) => (
          <div
            key={index}
            className="accordion-item"
          >
            <button
              className="accordion-btn"
              onClick={() =>
                handleToggle(index)
              }
            >
              {item.title}
            </button>

            {activeIndex === index && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TabsAccordion;