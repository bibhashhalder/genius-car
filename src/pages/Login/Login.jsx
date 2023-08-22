import React from "react";
import loginPhoto from "../../../public/images/login/login.svg";
import { Link } from "react-router-dom";
export default function Login() {
  const handleButton = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
  };
  return (
    <div className="max-w-6xl	mx-auto hero min-h-screen ">
      <div className="hero-content flex-col justify-between lg:flex-row">
        <div className="w-1/2 text-center lg:text-left">
          <img src={loginPhoto} alt="" />
        </div>
        <form
          onSubmit={handleButton}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className=" text-center mt-2 text-3xl font-bold">Login now!</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Are you new? Please{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sing Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
