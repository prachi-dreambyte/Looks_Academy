// src/pages/Auth/login.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../style/login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUser } from "../../redux/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status } = useSelector((state) => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Redirect if already logged in
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="container-fluid login-page">
      <div className="row min-vh-100">
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-white">
          <img src="/image/logo/Dbs.png" alt="illustration" className="img-fluid login-logo-img" />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="login-box p-4 shadow-sm bg-white rounded">
            <h3 className="text-center mb-4 fw-bold">Log In</h3>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-3 input-group">
                <span className="input-group-text"><FaUser /></span>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text"><FaLock /></span>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                  {status === "loading" ? "Logging in..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
