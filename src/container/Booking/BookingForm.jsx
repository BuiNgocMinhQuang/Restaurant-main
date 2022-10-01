import React, { useState } from "react";
import { FaConciergeBell } from "react-icons/fa";
import { useForm } from "react-hook-form";
import logoIcon from "../../assets/smIcon.png";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./BookingForm.scss";

export function GetBooking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-booking">
      <div className="app-booking-input flex-center">
        <select {...register("person")}>
          <option value="1P" defaultChecked>
            1 Person
          </option>
          <option value="2P">2 Person</option>
          <option value="3P">3 Person</option>
          <option value="4P">4 Person</option>
          <option value="5P">5 Person</option>
        </select>
        <input
          {...register("date", { required: true })}
          type="date"
          className="center-input"
        />
        <input {...register("time", { required: true })} type="time" />

        {Object.keys(errors).length !== 0 && (
          <ul className="nof-error">
            {errors.date?.type === "required" && (
              <li>
                <FaConciergeBell className="bell-icon" />
                Please choose a date
              </li>
            )}
            {errors.time?.type === "required" && (
              <li>
                {" "}
                <FaConciergeBell className="bell-icon" />
                Please choose the time
              </li>
            )}
          </ul>
        )}
      </div>

      <button type="submit" className="custom-button">
        Book Now
      </button>
    </form>
  );
}

const BookingForm = () => (
  <div className="app-booking ">
    <img src={logoIcon} alt="" className="logoIRight" />
    <div className="app-booking-heading">
      <SubHeading title="Booking" />
      <h1 className="headtext-cormorant">Book A Table</h1>
    </div>

    <GetBooking />
  </div>
);

export default BookingForm;
