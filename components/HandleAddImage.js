import { Timestamp, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "./FirebaseConfig";

const HandleAddImage = (props) => {
  const { formData } = props;
  console.log(formData);
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
export default HandleAddImage;
