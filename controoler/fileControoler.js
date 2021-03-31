const singleFile = require("../models/singleFile");
const mulitFiles = require("../models/mulitFIleModel");
const fs = require("fs");
const singleFileUpload = async (req, res, next) => {
  try {
    const file = new singleFile({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFromatter(req.file.size, 2), //0.00
    });
    await file.save();

    res.send("file saved to db");
  } catch (error) {
    console.log(error);
  }
};

const multipleFileUpload = async (req, res, next) => {
  const files = req.files;

  // convert images into base64 encoding
  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path);
    return (encode_img = img.toString("base64"));
  });

  imgArray.map((src, index) => {
    // create obj to store data into db

    let finalImg = {
      fileName: files[index].originalname,
      contentType: files[index].mimetype,
      fileSize: fileSizeFromatter(files[index].size, 2), //0.00
      imageBased64: src,
    };

    let newUpload = new mulitFiles(finalImg);

    newUpload.save();
  });

  res.send("saved into db");
};

// convet size of the file
const fileSizeFromatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const size = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + "" + size[index]
  );
};

module.exports = {
  singleFileUpload,
  multipleFileUpload,
};
