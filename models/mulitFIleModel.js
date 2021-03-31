const mongoose = require("mongoose");

const MultiFileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },fileSize: {
      type: "string",
      required: true,
    },
    imageBased64: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MulitiFile", MultiFileSchema);
