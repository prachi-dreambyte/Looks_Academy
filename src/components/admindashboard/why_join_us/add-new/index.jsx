import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* CKEditor */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddWhyJoinUs = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recordId, setRecordId] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* =========================
     FETCH EXISTING WHY JOIN US
  ========================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/why-join-us`);
        const result = await res.json();

        if (res.ok && result.success && result.data.length > 0) {
          const data = result.data[0];
          setTitle(data.title);
          setContent(data.content);
          setRecordId(data._id);
        }
      } catch {
        toast.error("Failed to fetch data");
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    try {
      setLoading(true);

      const url = recordId
        ? `${API_BASE_URL}/api/why-join-us/update/${recordId}`
        : `${API_BASE_URL}/api/why-join-us/add`;

      const method = recordId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(
          recordId
            ? "Why Join Us updated successfully"
            : "Why Join Us created successfully"
        );
        navigate("/admin/why-join-us");
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4">
      <h2>{recordId ? "Edit Why Join Us" : "Create Why Join Us"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />

        <button className="btn btn-primary mt-3" disabled={loading}>
          {loading ? "Saving..." : recordId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AddWhyJoinUs;
