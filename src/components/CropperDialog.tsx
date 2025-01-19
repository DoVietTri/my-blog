"use client";

import React, { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { MyDialog } from "./common/MyDialog";
import { getCroppedImg } from "@/utils/upload";

interface CropperDialogProps {
  dialogId: string;
  imgPreview: string;
  onClose?: () => void;
  onSubmit?: (file: File) => void;
  aspect?: number;
}

export const CropperDialog = ({
  dialogId,
  aspect = 4 / 3,
  imgPreview,
  onClose,
  onSubmit,
}: CropperDialogProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCrop = async (imgSrc: string, pixelCrop: Area | null) => {
    if (!pixelCrop) return;
    const cropped = await getCroppedImg(imgSrc, pixelCrop);

    if (onSubmit) onSubmit(cropped);
  };

  return (
    <MyDialog
      dialogId={dialogId}
      onClose={onClose}
      onSubmit={() => handleCrop(imgPreview, croppedAreaPixels)}
      confirmBtnText="Cắt"
    >
      <div className="h-96 relative">
        <Cropper
          image={imgPreview}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>

      <div className="mt-3">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(e) => {
            setZoom(Number(e.target.value));
          }}
          className="range range-info range-xs"
        />
      </div>
    </MyDialog>
  );
};
