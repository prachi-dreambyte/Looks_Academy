import { useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../../../../assets/styles/aboutus/CreateaboutUs.module.css";

const CreateAboutUs = () => {
  const navigate = useNavigate();

  /* ================= TAG STATES ================= */
  const [missionTags, setMissionTags] = useState([]);
  const [visionTags, setVisionTags] = useState([]);
  const [missionTagInput, setMissionTagInput] = useState("");
  const [visionTagInput, setVisionTagInput] = useState("");

  /* ================= FORM ================= */
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= TAG HANDLERS ================= */
  const handleTagKeyDown = (e, type) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();

      if (type === "mission") {
        if (!missionTags.includes(missionTagInput)) {
          const updated = [...missionTags, missionTagInput];
          setMissionTags(updated);
          setValue("missiontags", updated);
        }
        setMissionTagInput("");
      }

      if (type === "vision") {
        if (!visionTags.includes(visionTagInput)) {
          const updated = [...visionTags, visionTagInput];
          setVisionTags(updated);
          setValue("visiontags", updated);
        }
        setVisionTagInput("");
      }
    }
  };

  const removeTag = (index, type) => {
    if (type === "mission") {
      const updated = missionTags.filter((_, i) => i !== index);
      setMissionTags(updated);
      setValue("missiontags", updated);
    }

    if (type === "vision") {
      const updated = visionTags.filter((_, i) => i !== index);
      setVisionTags(updated);
      setValue("visiontags", updated);
    }
  };

  /* ================= SUBMIT ================= */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("shortPara", data.shortPara);
      formData.append("description", data.description);

      formData.append("graduates", data.graduates);
      formData.append("trainers", data.trainers);
      formData.append("years", data.years);
      formData.append("rate", data.rate);

      formData.append("missiontitle", data.missiontitle);
      formData.append("missiondescription", data.missiondescription);
      formData.append("missiontags", JSON.stringify(missionTags));

      formData.append("visiontitle", data.visiontitle);
      formData.append("visiondescription", data.visiondescription);
      formData.append("visiontags", JSON.stringify(visionTags));

      if (data.mainImage?.[0]) {
        formData.append("mainImage", data.mainImage[0]);
      }

      if (data.storyImage1?.[0]) {
        formData.append("image", data.storyImage1[0]);
      }

      if (data.storyImage2?.[0]) {
        formData.append("image", data.storyImage2[0]);
      }

      if (data.missionImage?.[0]) {
        formData.append("missionImage", data.missionImage[0]);
      }

      if (data.visionImage?.[0]) {
        formData.append("visionImage", data.visionImage[0]);
      }

      await axios.post(
        `${API_BASE_URL}/api/AboutUs/createAboutUs`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("About Us created successfully ✅");
      reset();
      setMissionTags([]);
      setVisionTags([]);

      setTimeout(() => navigate("/admin/AboutUs"), 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  /* ================= JSX ================= */
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Create About Us</h2>

        {/* TITLE */}
        <div className={styles.field}>
          <label>Title</label>
          <input
            placeholder="Enter About Us title"
            {...register("title", { required: true })}
          />
        </div>

        {/* SHORT PARA */}
        <div className={styles.field}>
          <label>Short Paragraph</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) =>
              setValue("shortPara", editor.getData(), { shouldValidate: true })
            }
          />
          <input
            type="hidden"
            placeholder="Short introduction text"
            {...register("shortPara", { required: true })}
          />
        </div>

        {/* MAIN IMAGE */}
        <div className={styles.field}>
          <label>Main Image</label>
          <input type="file" {...register("mainImage")} />
        </div>

        {/* OUR STORY */}
        <div className={styles.field}>
          <label>Our Story Description</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) =>
              setValue("description", editor.getData(), { shouldValidate: true })
            }
          />
          <input
            type="hidden"
            placeholder="Write your story here"
            {...register("description", { required: true })}
          />
        </div>

        {/* STORY IMAGES */}
        <div className={styles.field}>
          <label>Our Story Image 1</label>
          <input type="file" {...register("storyImage1", { required: true })} />
        </div>

        <div className={styles.field}>
          <label>Our Story Image 2</label>
          <input type="file" {...register("storyImage2", { required: true })} />
        </div>

        {/* NUMBERS */}
        <div className={styles.field}>
          <label>Graduates</label>
          <input
            type="number"
            placeholder="e.g. 5000"
            {...register("graduates", { required: true })}
          />

          <label>Trainers</label>
          <input
            type="number"
            placeholder="e.g. 120"
            {...register("trainers", { required: true })}
          />

          <label>Years</label>
          <input
            type="number"
            placeholder="e.g. 10"
            {...register("years", { required: true })}
          />

          <label>Success Rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 95"
            {...register("rate", { required: true })}
          />
        </div>

        {/* MISSION */}
        <div className={styles.field}>
          <label>Mission Title</label>
          <input
            placeholder="Enter mission title"
            {...register("missiontitle", { required: true })}
          />

          <label>Mission Description</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) =>
              setValue("missiondescription", editor.getData())
            }
          />
          <input
            type="hidden"
            placeholder="Mission description"
            {...register("missiondescription", { required: true })}
          />

          <label>Mission Tags</label>
          <div className={styles.tagBox}>
            {missionTags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                {tag}
                <button type="button" onClick={() => removeTag(i, "mission")}>
                  ×
                </button>
              </span>
            ))}
            <input
              placeholder="Press Enter to add mission tag"
              value={missionTagInput}
              onChange={(e) => setMissionTagInput(e.target.value)}
              onKeyDown={(e) => handleTagKeyDown(e, "mission")}
            />
          </div>

          <input type="file" {...register("missionImage")} />
        </div>

        {/* VISION */}
        <div className={styles.field}>
          <label>Vision Title</label>
          <input
            placeholder="Enter vision title"
            {...register("visiontitle", { required: true })}
          />

          <label>Vision Description</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) =>
              setValue("visiondescription", editor.getData())
            }
          />
          <input
            type="hidden"
            placeholder="Vision description"
            {...register("visiondescription", { required: true })}
          />

          <label>Vision Tags</label>
          <div className={styles.tagBox}>
            {visionTags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                {tag}
                <button type="button" onClick={() => removeTag(i, "vision")}>
                  ×
                </button>
              </span>
            ))}
            <input
              placeholder="Press Enter to add vision tag"
              value={visionTagInput}
              onChange={(e) => setVisionTagInput(e.target.value)}
              onKeyDown={(e) => handleTagKeyDown(e, "vision")}
            />
          </div>

          <input type="file" {...register("visionImage")} />
        </div>

        <button className={styles.btn}>Publish About Us</button>
      </form>
    </div>
  );
};

export default CreateAboutUs;
