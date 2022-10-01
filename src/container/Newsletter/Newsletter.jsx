import React from "react";
import { useForm } from "react-hook-form";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Newsletter.scss";

export function GetMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-booking">
      <div className="app-newsletter-input flex-center">
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          type="email"
          placeholder="Enter your email address"
        />

        {Object.keys(errors).length !== 0 && (
          <ul className="nof-error">
            {errors.email?.type === "required" && (
              <li>Please type your email !</li>
            )}
          </ul>
        )}
      </div>

      <button type="submit" className="custom-button">
        Subscribe
      </button>
    </form>
  );
}

const Newsletter = () => (
  <div className="app-newsletter ">
    <div className="app-newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext-cormorant">Subscribe To Our Newsletter</h1>
      <p className="p-opensans">And never miss latest Updates!</p>
    </div>
    <GetMail />
  </div>
);

export default Newsletter;
