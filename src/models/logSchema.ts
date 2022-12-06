const mongoose = require('mongoose');


const LogSchema = new mongoose.Schema({
    ocupacao: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    acao: {
      type: String,
      required: true,
    },
    data: {
      type: Date,
      required: true,
    },
  });
  
  export const Log = mongoose.model("Log", LogSchema);