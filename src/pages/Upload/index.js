import React, { useState } from "react";

import { storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import UploadPhoto from "../../components/UploadPhoto";

export default function Upload() {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image is Uploaded");
    });
  };
  return (
    <div>
      <UploadPhoto setImageUpload={setImageUpload} uploadImage={uploadImage} />
    </div>
  );
}
