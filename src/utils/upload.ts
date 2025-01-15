import { Area } from "react-easy-crop";

export const getCroppedImg = (
  imageSrc: string,
  pixelCrop: Area
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob((blob) => {
        resolve(blob as File);
      }, "image/png");
    };

    image.onerror = (error) => reject(error);
  });
};
