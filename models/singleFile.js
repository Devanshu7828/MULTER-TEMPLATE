const mongoose = require("mongoose");

const SingleFileSchema = new mongoose.Schema(
  {
    fileName: {
      type: "string",
      required: true,
    },
    filePath: {
      type: "string",
      required: true,
    },
    fileType: {
      type: "string",
      required: true,
    },
    fileSize: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SingleFile", SingleFileSchema);
