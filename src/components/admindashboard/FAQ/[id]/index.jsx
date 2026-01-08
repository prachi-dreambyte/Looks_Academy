import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const EditFaq = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= FETCH FAQ ================= */
  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/faqs/get-faq/${id}`
        );

        if (res.data.success) {
          setValue("question", res.data.data.question);
          setValue("answer", res.data.data.answer);
        } else {
          toast.error("FAQ not found");
        }
      } catch (error) {
        toast.error("Failed to load FAQ");
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, [id, setValue]);

  /* ================= UPDATE FAQ ================= */
  const onSubmit = async (data) => {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/faqs/update-faq/${id}`,
        data
      );

      if (res.data.success) {
        toast.success("FAQ updated successfully");
        navigate("/admin/faqs");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading) return <p>Loading FAQ...</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Edit FAQ</h4>

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

          <button type="submit" className="btn btn-success me-2">
            Update FAQ
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/faqs")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFaq;
