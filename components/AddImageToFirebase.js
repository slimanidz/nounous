import { Timestamp, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "./FirebaseConfig";
import HandleAddImage from "./HandleAddImage";

const AddImage = () => {
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleAdd = () => {
    // HandleAddImage({ formData });
    if (!formData.id || !formData.image) {
      alert("Please fill all the fields");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          id: "",
          image: "",
        });
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "nounous");
          addDoc(articleRef, {
            id: formData.id,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              alert("Article added successfully");
              setProgress(0);
            })
            .catch((err) => {
              alert("Error adding article");
            });
        });
      }
    );
  };

  return (
    <div className="border p-3 mt-3 flex flex-col">
      <>
        <h2>Add image</h2>
        <div className="flex flex-col">
          <label htmlFor="">id</label>
          <input
            type="text"
            name="id"
            className="border"
            value={formData.id}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* image */}
        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="border"
          onChange={(e) => handleImageChange(e)}
        />

        <button
          className="bg-blue-500 active:bg-blue-300 text-white font-bold mt-2 p-1"
          onClick={handleAdd}
        >
          ADD
        </button>
      </>
    </div>
  );
};

export default AddImage;
