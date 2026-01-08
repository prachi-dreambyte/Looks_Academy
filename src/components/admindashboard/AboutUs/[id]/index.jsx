import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../../../../style/aboutus/CreateaboutUs.module.css";

const EditAboutUs = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= EDITOR STATES ================= */
  const [shortParaEditor, setShortParaEditor] = useState("");
  const [storyEditor, setStoryEditor] = useState("");
  const [missionEditor, setMissionEditor] = useState("");
  const [visionEditor, setVisionEditor] = useState("");

  /* ================= TAG STATES ================= */
  const [missionTags, setMissionTags] = useState([]);
  const [visionTags, setVisionTags] = useState([]);
  const [missionTagInput, setMissionTagInput] = useState("");
  const [visionTagInput, setVisionTagInput] = useState("");

  const [mainImagePreview, setMainImagePreview] = useState("");
const [storyImage1Preview, setStoryImage1Preview] = useState("");
const [storyImage2Preview, setStoryImage2Preview] = useState("");
const [missionImagePreview, setMissionImagePreview] = useState("");
const [visionImagePreview, setVisionImagePreview] = useState("");


  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  /* ================= FETCH DATA ================= */
useEffect(() => {
  const fetchAboutUs = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/AboutUs/getAboutUsById/${id}`
      );

      const data = res.data.data;

      reset({
        title: data.title,
        shortPara: data.shortPara,
        description: data.ourStory.description,
        graduates: data.numbers.graduates,
        trainers: data.numbers.trainers,
        years: data.numbers.years,
        rate: data.numbers.rate,
        missiontitle: data.mission.title,
        missiondescription: data.mission.description,
        visiontitle: data.vision.title,
        visiondescription: data.vision.description,
      });

      setShortParaEditor(data.shortPara);
      setStoryEditor(data.ourStory.description);
      setMissionEditor(data.mission.description);
      setVisionEditor(data.vision.description);

      setMissionTags(data.mission.tags || []);
      setVisionTags(data.vision.tags || []);

      setMainImagePreview(
        data.mainImage
          ? `${API_BASE_URL}/${data.mainImage.replace(/\\/g, "/")}`
          : ""
      );

      setStoryImage1Preview(
        data.ourStory?.images?.[0]
          ? `${API_BASE_URL}/${data.ourStory.images[0].replace(/\\/g, "/")}`
          : ""
      );

      setStoryImage2Preview(
        data.ourStory?.images?.[1]
          ? `${API_BASE_URL}/${data.ourStory.images[1].replace(/\\/g, "/")}`
          : ""
      );

      setMissionImagePreview(
        data.mission?.image
          ? `${API_BASE_URL}/${data.mission.image.replace(/\\/g, "/")}`
          : ""
      );

      setVisionImagePreview(
        data.vision?.image
          ? `${API_BASE_URL}/${data.vision.image.replace(/\\/g, "/")}`
          : ""
      );

    } catch (error) {
      toast.error("Failed to load About Us");
    } finally {
      setLoading(false);
    }
  };

  fetchAboutUs();
}, [id, API_BASE_URL, reset]);


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

  /* ================= UPDATE ================= */
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

      if (data.mainImage?.[0]) formData.append("mainImage", data.mainImage[0]);
      if (data.storyImage1?.[0]) formData.append("image", data.storyImage1[0]);
      if (data.storyImage2?.[0]) formData.append("image", data.storyImage2[0]);
      if (data.missionImage?.[0]) formData.append("missionImage", data.missionImage[0]);
      if (data.visionImage?.[0]) formData.append("visionImage", data.visionImage[0]);

      await axios.put(
        `${API_BASE_URL}/api/AboutUs/updateAboutUs/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("About Us updated successfully ✅");
      setTimeout(() => navigate("/admin/AboutUs"), 1200);
    } catch (error) {
      toast.error("Failed to update About Us");
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  /* ================= JSX ================= */
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Edit About Us</h2>

        <div className={styles.field}>
          <label>Title</label>
          <input {...register("title")} />
        </div>

        <div className={styles.field}>
          <label>Short Paragraph</label>
          <CKEditor
            editor={ClassicEditor}
            data={shortParaEditor}
            onChange={(e, editor) => {
              const value = editor.getData();
              setShortParaEditor(value);
              setValue("shortPara", value);
            }}
          />
          <input type="hidden" {...register("shortPara")} />
        </div>

        <div className={styles.field}>
  <label>Main Image</label>

  {mainImagePreview && (
    <img
      src={mainImagePreview}
      alt="Main"
      className={styles.preview}
    />
  )}

  <input
    type="file"
    {...register("mainImage")}
    onChange={(e) =>
      setMainImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  />
</div>


        <div className={styles.field}>
          <label>Our Story Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={storyEditor}
            onChange={(e, editor) => {
              const value = editor.getData();
              setStoryEditor(value);
              setValue("description", value);
            }}
          />
          <input type="hidden" {...register("description")} />
        </div>

       <div className={styles.field}>
  <label>Our Story Image 1</label>

  {storyImage1Preview && (
    <img src={storyImage1Preview} className={styles.preview} />
  )}

  <input
  type="file"
  {...register("storyImage1")}
  onChange={(e) => {
    if (e.target.files && e.target.files[0]) {
      setStoryImage1Preview(
        URL.createObjectURL(e.target.files[0])
      );
    }
  }}
/>

</div>


        <div className={styles.field}>
  <label>Our Story Image 2</label>

  {storyImage2Preview && (
    <img src={storyImage2Preview} className={styles.preview} />
  )}

  <input
  type="file"
  {...register("storyImage2")}
  onChange={(e) => {
    if (e.target.files && e.target.files[0]) {
      setStoryImage2Preview(
        URL.createObjectURL(e.target.files[0])
      );
    }
  }}
/>

</div>


        <div className={styles.field}>
          <label>Graduates</label>
          <input type="number" {...register("graduates")} />

          <label>Trainers</label>
          <input type="number" {...register("trainers")} />

          <label>Years</label>
          <input type="number" {...register("years")} />

          <label>Success Rate (%)</label>
          <input type="number" {...register("rate")} />
        </div>

        <div className={styles.field}>
          <label>Mission Title</label>
          <input {...register("missiontitle")} />

          <label>Mission Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={missionEditor}
            onChange={(e, editor) => {
              const value = editor.getData();
              setMissionEditor(value);
              setValue("missiondescription", value);
            }}
          />
          <input type="hidden" {...register("missiondescription")} />

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

          <div className={styles.field}>
  <label>Mission Image</label>

  {missionImagePreview && (
    <img src={missionImagePreview} className={styles.preview} />
  )}

  <input
    type="file"
    {...register("missionImage")}
    onChange={(e) =>
      setMissionImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  />
</div>

        </div>

        <div className={styles.field}>
          <label>Vision Title</label>
          <input {...register("visiontitle")} />

          <label>Vision Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={visionEditor}
            onChange={(e, editor) => {
              const value = editor.getData();
              setVisionEditor(value);
              setValue("visiondescription", value);
            }}
          />
          <input type="hidden" {...register("visiondescription")} />

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

          <div className={styles.field}>
  <label>Vision Image</label>

  {visionImagePreview && (
    <img src={visionImagePreview} className={styles.preview} />
  )}

  <input
    type="file"
    {...register("visionImage")}
    onChange={(e) =>
      setVisionImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  />
</div>

        </div>

        <button className={styles.btn}>Update About Us</button>
      </form>
    </div>
  );
};

export default EditAboutUs;
