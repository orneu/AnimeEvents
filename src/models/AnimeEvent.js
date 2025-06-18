import mongoose from "mongoose";

const AnimeEventSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  lugar: { type: String, required: true },
  fecha: { type: Date, required: true },
  asistentes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Otaku" }],
});

export const AnimeEvent = mongoose.model("AnimeEvent", AnimeEventSchema);
