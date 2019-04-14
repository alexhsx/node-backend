const mongoose = require("mongoose");

const Usuario = new mongoose.Schema(
  {
    nome: {
      type: string,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Usuario", Usuario);
