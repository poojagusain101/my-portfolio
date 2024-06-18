'use client'
import React from 'react'
import './Stats.css'

import CountUp from 'react-countup';

const stats = [
  {
    num: 5,
    text: "Hackathons Participated",
  },
  {
    num: 16,
    text: "Projects Completed",
  },
  {
    num: 21,
    text: "Technologies Learnt",
  },
  {
    num: 62,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
   <section className="stats-section">
    <div className="container">
      <div className="stats-container">
        {stats.map((item, index) => {
          return (
            <div className="stat-item" key={index}>
              <CountUp 
                end={item.num} 
                duration={5} 
                delay={2} 
                className="counter"
              />
              <p className={`stat-text ${item.text.length < 10 ? 'short-text' : 'long-text'}`}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
   </section>
  )
}

export default Stats
