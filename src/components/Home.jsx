import React from 'react';

const Home = () => {
  return (
      <>
      <div className="hero">
        <div className="card bg-dark text-white border">
            <img src="../assets/bg.png" className="card-img" alt="..." height="550px"/>

            <div className="card-img-overlay d-flex flex-column">
                <div className="container">
                    <h5 className="card-title display-4 fw-bolder mb-0 text-info text-opacity-50">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2 text-info text-opacity-50">CHECKOUT ALL THE TRENDS</p>
                </div>
            </div>

        </div>
      </div>
      </>
  );
};

export default Home;
