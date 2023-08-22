import React from "react";
import loginPhoto from "../../../public/images/login/login.svg";
import { Link } from "react-router-dom";
export default function SignUp() {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="max-w-6xl	mx-auto hero min-h-screen ">
      <div className="hero-content flex-col justify-between lg:flex-row">
        <div className="w-1/2 text-center lg:text-left">
          <img src={loginPhoto} alt="" />
        </div>
        <form
          onSubmit={handleSignUp}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className=" text-center mt-2 text-3xl font-bold">Sign Up</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="input your name"
                className="input input-bordered"
              />
            </div>
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
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p>
              Have an account? Please{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
