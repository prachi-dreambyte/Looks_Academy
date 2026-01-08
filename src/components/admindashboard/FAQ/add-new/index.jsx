import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateFaq = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${API_BASE_URL}/api/faqs/create`,
        data
      );

      toast.success("FAQ created successfully");

      // ✅ Redirect to All FAQs page
      navigate("/admin/faqs");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Create FAQ</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Question */}
          <div className="mb-3">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter question"
              {...register("question", {
                required: "Question is required",
              })}
            />
            {errors.question && (
              <small className="text-danger">
                {errors.question.message}
              </small>
            )}
          </div>

          {/* Answer */}
          <div className="mb-3">
            <label className="form-label">Answer</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter answer"
              {...register("answer", {
                required: "Answer is required",
              })}
            ></textarea>
            {errors.answer && (
              <small className="text-danger">
                {errors.answer.message}
              </small>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Save FAQ
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFaq;
