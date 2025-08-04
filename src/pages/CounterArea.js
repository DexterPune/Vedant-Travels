import React, { useEffect, useState } from 'react';

const CounterArea = () => {
  const counters = [
    {
      id: 1,
      icon: './img/icon/taxi-1.svg',
      countTo: 5300,
      title: '+ Client Served',
    },
    {
      id: 2,
      icon: './img/icon/happy.svg',
      countTo: 4000,
      title: '+ Happy Clients',
    },
    {
      id: 3,
      icon: './img/icon/driver.svg',
      countTo: 100,
      title: '+ Vehicle Fleet',
    },
    {
      id: 4,
      icon: './img/icon/trip.svg',
      countTo: 1015,
      title: '+ Complate Trips ',
    },
  ];

  const [counterState, setCounterState] = useState([]);

  // Function to animate counter
  const startCounting = (endValue, id) => {
    const duration = 150; 
    const incrementTime = 5; 
    const totalSteps = duration / incrementTime; // Number of steps during the animation
    const increment = Math.floor(endValue / totalSteps); // Larger increment value for fast animation

    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= endValue) {
        currentValue = endValue;
        clearInterval(interval);
      }
      setCounterState((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, count: currentValue } : item
        )
      );
    }, incrementTime); // Updates every 5ms for faster animation
  };

  useEffect(() => {
    // Initialize counterState with all counters set to 0
    setCounterState(
      counters.map((counter) => ({
        ...counter,
        count: 0, // Start from 0
        started: false, // Add a flag to track if counting has started
      }))
    );
  }, []);

  useEffect(() => {
    // Only start counting if the counter hasn't started yet
    counterState.forEach((counter) => {
      if (!counter.started && counter.count === 0) {
        startCounting(counter.countTo, counter.id);
        setCounterState((prev) =>
          prev.map((item) =>
            item.id === counter.id ? { ...item, started: true } : item
          )
        );
      }
    });
  }, [counterState]); // Run once after state is set for the first time

  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-wrapper">
          <div className="row">
            {counterState.map((item) => (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div>
                    <span className="counter">{item.count}</span>
                    <h6 className="title">{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
