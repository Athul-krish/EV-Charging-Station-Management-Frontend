import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg,#2C3E50,#4CA1AF)",
      }}
    >
      <div className="container">

        <div
          className="text-center mx-auto p-5 shadow"
          style={{
            maxWidth: "850px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
          }}
        >
          <h1
            className="fw-bold text-white display-4 mb-4"
          >
            ⚡ EV Charging Station Booking
          </h1>

          <p
            className="lead mb-5"
            style={{
              color: "rgba(255,255,255,.9)",
            }}
          >
            Easily schedule EV charging sessions, manage bookings,
            and monitor charging slots through a simple and
            modern booking system.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">

            <Link
              to="/add"
              className="btn btn-success btn-lg px-4"
            >
              Book Charging Slot
            </Link>

            <Link
              to="/view"
              className="btn btn-outline-light btn-lg px-4"
            >
              View Bookings
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;