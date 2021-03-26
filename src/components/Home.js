import React from "react";

function Home() {
  return (
    <>
      <div className="btn-container">
        <button>TACOS</button>
        <button>BEERS</button>
        <button>WINES</button>
        <button>DESSERTS</button>
        <button>RESERVATION</button>
      </div>

      <section className="banner-section">
        <div className="banner-left-col">
          <h1>Terry's Taco Joint</h1>
          <p>Pretty Good Tacos!</p>
        </div>
        <div className='banner-right-col'>
          <div className="cta1">
            <h1>$1.99</h1>
            <p>Tacos</p>
          </div>
          <div className="cta2">
            <h1>$3.99</h1>
            <p>Kombucha</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
