// Under.jsx
import React, { useState, useEffect } from "react";

const Under = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const countDate = new Date("October 30, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      setTimeLeft({
        days: Math.max(Math.floor(gap / day), 0),
        hours: Math.max(Math.floor((gap % day) / hour), 0),
        minutes: Math.max(Math.floor((gap % hour) / minute), 0),
        seconds: Math.max(Math.floor((gap % minute) / second), 0),
      });
    };

    const interval = setInterval(countdown, 1000);
    countdown();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 animate-gradient-x text-white font-poppins">
      <div className="text-center bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-md w-full animate-fadeIn">
        <h1 className="text-4xl mb-4 drop-shadow-md">🚧 We'll Be Back Soon</h1>
        <p className="mb-8 text-lg drop-shadow-sm">
          Our website is currently undergoing maintenance.
          <br />
          Expected back on <strong>30th October</strong>.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/20 p-5 rounded-xl min-w-[70px] flex flex-col items-center transform transition-all hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              <span className="text-2xl font-bold drop-shadow-lg">{timeLeft[unit]}</span>
              <small className="text-sm opacity-80 capitalize">{unit}</small>
            </div>
          ))}
        </div>

        <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full mx-auto mb-6 animate-spin shadow-lg"></div>

        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold drop-shadow-md hover:scale-105 transition-transform">
          Notify Me When Back
        </button>

        <footer className="mt-6 text-sm opacity-70">&copy; 2025 Your Website Name</footer>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes gradient-x {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          .animate-gradient-x {
            background-size: 400% 400%;
            animation: gradient-x 15s ease infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Under;
