import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ViewBooking = () => {
  const [bookings, setBookings] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteBooking = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((response) => {
        alert(response.data.message);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  };

  return (
    <>
        <Navbar/>
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,#2C3E50,#4CA1AF)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">
          EV Charging Bookings
        </h2>

        <div className="row">
          {bookings.map((value, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="card h-100 shadow border-0"
                style={{
                  background: "rgba(255,255,255,.12)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "18px",
                  color: "white",
                }}
              >
                <div className="card-body">
                  <h4 className="fw-bold text-center mb-4">
                    {value.ownerName}
                  </h4>

                  <p>
                    <b>Booking ID :</b> {value.bookingId}
                  </p>

                  <p>
                    <b>Email :</b> {value.email}
                  </p>

                  <p>
                    <b>Phone :</b> {value.phone}
                  </p>

                  <p>
                    <b>Vehicle No :</b> {value.vehicleRegistrationNumber}
                  </p>

                  <p>
                    <b>Brand :</b> {value.vehicleBrand}
                  </p>

                  <p>
                    <b>Model :</b> {value.vehicleModel}
                  </p>

                  <p>
                    <b>Battery :</b> {value.batteryCapacity} kWh
                  </p>

                  <p>
                    <b>Connector :</b> {value.connectorType}
                  </p>

                  <p>
                    <b>Date :</b> {value.chargingDate}
                  </p>

                  <p>
                    <b>Time Slot :</b> {value.timeSlot}
                  </p>

                  <p>
                    <b>Estimated Units :</b> {value.estimatedUnits}
                  </p>

                  <p>
                    <b>Charging Bay :</b> {value.chargingBayNumber}
                  </p>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewBooking;
