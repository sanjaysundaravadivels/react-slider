import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, persIndex) => {
          const { id, name, image, title, quote } = person;
          let position = "nextSlide";
          if (index === persIndex) {
            position = "activeSlide";
          }
          if (
            persIndex === index - 1 ||
            (index === 0 && persIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h2>{name}</h2>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
