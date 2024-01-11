import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //   upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //   file has been uploaded successfully
    console.log(
      "SUCCESS :: File Uploaded :: File has been uploaded successfull on cloudinary :: ",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    console.error(
      "FAILD :: File Not Uploaded :: File has not been uploaded on cloudinary :: ",
      error
    );
    return null;
  }
};

export { uploadOnCloudinary };
