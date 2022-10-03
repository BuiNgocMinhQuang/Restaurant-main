import "./SignIn.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="signin  r">
      <div className="form-login">
        <h1 className="headtext-cormorant" style={{ textAlign: "center" }}>
          Login
        </h1>
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="SignInForm"
        >
          <input {...register("Email")} placeholder="Email Address " />
          <input {...register("Password")} placeholder="Password " />
          <p>{data}</p>
        </form>
        <button type="submit" className="custom-button btn-center">
          Log In
        </button>
        <h1
          className="headtext-cormorant"
          style={{ textAlign: "center", fontSize: "1rem", lineHeight: "40px" }}
        >
          Or
        </h1>
        <button type="submit" className="custom-button btn-login-gg">
          <span>Log In Witch Google</span>
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
