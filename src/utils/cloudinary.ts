import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upload = async (
  file: File,
  toFolder: string
): Promise<UploadApiResponse> => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise<UploadApiResponse>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: toFolder },
      (error, result) => {
        if (error) reject(error);

        resolve(result as UploadApiResponse);
      }
    );

    uploadStream.end(buffer);
  });
};
