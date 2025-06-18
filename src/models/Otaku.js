import mongoose from "mongoose";

const OtakuSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  edad: { type: Number, required: true },
  password: { type: String, required: true },
});

export const Otaku = mongoose.model("Otaku", OtakuSchema);
