const singleFile = require("../models/singleFile");
const mulitFiles = require("../models/mulitFIleModel");

const singleImage = async (req, res) => {
  try {
    const files = await singleFile.find();
    console.log(files);
    res.render("single", { items: files });
  } catch (error) {
    console.log(error);
  }
};

const mulitImage = async (req, res) => {
  const mulitFIle = await mulitFiles.find();

  res.render("multi", { items: mulitFIle });
};
module.exports = {
  singleImage,
  mulitImage,
};
