import { Button } from "@mui/material";
import React from "react";

import Input from "../../commons/Input";
import "./style.css";

export default function UploadPhoto({ setImageUpload, uploadImage }) {
  return (
    <div className="upload-Input-container">
      <Input
        className="upload-image-input"
        type="file"
        placeholder="Upload Image"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <Button className="btn-upload-image" onClick={uploadImage}>
        Upload Image
      </Button>
    </div>
  );
}
