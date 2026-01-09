import React, { useEffect, useState } from "react";
import styles from "../../../../assets/styles/Our_Story/AddOurStory.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/* CKEditor */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddOurStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [storyId, setStoryId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* =========================
     FETCH EXISTING STORY
  ========================= */
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/our-story`);
        const result = await res.json();

        if (res.ok && result.success && result.data.length > 0) {
          const story = result.data[0];
          setTitle(story.title);
          setContent(story.content);
          setStoryId(story._id);
        }
      } catch (error) {
        console.error("Failed to fetch story");
      }
    };

    fetchStory();
  }, [API_BASE_URL]);

  /* =========================
     SUBMIT HANDLER
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!content.trim()) {
      toast.error("Content is required");
      return;
    }

    try {
      setLoading(true);

      const url = storyId
        ? `${API_BASE_URL}/api/our-story/update/${storyId}`
        : `${API_BASE_URL}/api/our-story/add`;

      const method = storyId ? "PUT" : "POST";

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
          storyId ? "Our Story updated successfully" : "Our Story created successfully"
        );
        navigate("/admin/our-story");
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
    <div className={styles.wrapper}>
      <h2>{storyId ? "Edit Our Story" : "Create Our Story"}</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Title */}
        <div className={styles.inputGroup}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* CKEditor */}
        <div className={styles.inputGroup}>
          <label>Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : storyId ? "Update Story" : "Create Story"}
        </button>
      </form>
    </div>
  );
};

export default AddOurStory;
