import axios from "axios";
import React, { useState } from "react";

const AddBooking = () => {

  const [booking, setBooking] = useState({

    bookingId: "",
    ownerName: "",
    email: "",
    phone: "",
    vehicleRegistrationNumber: "",
    vehicleBrand: "",
    vehicleModel: "",
    batteryCapacity: "",
    connectorType: "",
    chargingDate: "",
    timeSlot: "",
    estimatedUnits: "",
    chargingBayNumber: "",

  });

  const inputHandler = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const readValues = () => {

    axios
      .post("http://localhost:3000/add", booking)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });

  };

  const inputStyle = {
    background: "rgba(255,255,255,.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "12px",
  };

  return (

    <div
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#2C3E50,#4CA1AF)",
      }}
    >

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div
              className="card border-0 shadow-lg"
              style={{
                background: "rgba(255,255,255,.12)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >

              <div className="card-body p-5">

                <h2 className="text-center text-white fw-bold mb-2">
                  EV Charging Slot Booking
                </h2>

                <p
                  className="text-center mb-5"
                  style={{
                    color: "rgba(255,255,255,.8)",
                  }}
                >
                  Fill in the details below to reserve your charging slot.
                </p>

                <div className="row g-4">

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Booking ID
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Booking ID"
                      name="bookingId"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Owner Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Owner Name"
                      name="ownerName"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Email"
                      name="email"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Phone
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Phone Number"
                      name="phone"
                      onChange={inputHandler}
                    />

                  </div>
                                    <div className="col-md-6">

                    <label className="form-label text-white">
                      Vehicle Registration Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Registration Number"
                      name="vehicleRegistrationNumber"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Vehicle Brand
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="vehicleBrand"
                      onChange={inputHandler}
                    >
                      <option value="">Select Brand</option>
                      <option value="Tesla">Tesla</option>
                      <option value="BYD">BYD</option>
                      <option value="MG">MG</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Kia">Kia</option>
                      <option value="Tata">Tata</option>
                      <option value="Mahindra">Mahindra</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Audi">Audi</option>
                    </select>

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Vehicle Model
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Vehicle Model"
                      name="vehicleModel"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Battery Capacity (kWh)
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Battery Capacity"
                      name="batteryCapacity"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Connector Type
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="connectorType"
                      onChange={inputHandler}
                    >
                      <option value="">Select Connector</option>
                      <option value="Type 1">Type 1</option>
                      <option value="Type 2">Type 2</option>
                      <option value="CCS">CCS</option>
                      <option value="CHAdeMO">CHAdeMO</option>
                      <option value="GB/T">GB/T</option>
                    </select>

                  </div>
                                    <div className="col-md-6">

                    <label className="form-label text-white">
                      Charging Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      style={inputStyle}
                      name="chargingDate"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Time Slot
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="timeSlot"
                      onChange={inputHandler}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="09:00 - 10:00">09:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="11:00 - 12:00">11:00 - 12:00</option>
                      <option value="01:00 - 02:00">01:00 - 02:00</option>
                      <option value="02:00 - 03:00">02:00 - 03:00</option>
                      <option value="03:00 - 04:00">03:00 - 04:00</option>
                      <option value="04:00 - 05:00">04:00 - 05:00</option>
                    </select>

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Estimated Units (kWh)
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      style={inputStyle}
                      placeholder="Enter Estimated Units"
                      name="estimatedUnits"
                      onChange={inputHandler}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label text-white">
                      Charging Bay Number
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="chargingBayNumber"
                      onChange={inputHandler}
                    >
                      <option value="">Select Charging Bay</option>
                      <option value="Bay-1">Bay-1</option>
                      <option value="Bay-2">Bay-2</option>
                      <option value="Bay-3">Bay-3</option>
                      <option value="Bay-4">Bay-4</option>
                      <option value="Bay-5">Bay-5</option>
                      <option value="Bay-6">Bay-6</option>
                      <option value="Bay-7">Bay-7</option>
                      <option value="Bay-8">Bay-8</option>
                    </select>

                  </div>
                                    <div className="col-12 mt-4">

                    <button
                      className="btn btn-success w-100 py-3 fw-bold"
                      onClick={readValues}
                    >
                      Book Charging Slot
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AddBooking;