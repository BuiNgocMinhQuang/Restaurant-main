import React from "react";
import commaImg from "../../assets/comma.png";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Customer.scss";

const AwardCard = ({ customer: { avatar, name, position, comment } }) => (
  <div className="app-customer-card">
    <div className="customer-img">
      <img src={avatar} alt="customer" />
      <img src={commaImg} alt="" className="comma" />
    </div>

    <div className="app-cusotmer-card-content">
      <p className="comment-cust">{comment}</p>
      <p className="name-cust">{name}</p>
      <p className="p-opensans">{position}</p>
    </div>
  </div>
);

const Customer = () => (
  <div className=" app-customer section-padding flex-center">
    <div className="warrper-customer">
      <div className="customer-title">
        <SubHeading title="Testimony" />
        <h1 className="headtext-cormorant">Happy Customer</h1>
      </div>

      <div className="app-customer-wrapper">
        {data.customers.map((customer) => (
          <AwardCard customer={customer} key={customer.name} />
        ))}
      </div>
    </div>
  </div>
);

export default Customer;
