import { Otaku } from "../models/Otaku.js";
import { AnimeEvent } from "../models/AnimeEvent.js";

// Obtener todos los otakus
const getAllOtakus = async () => await Otaku.find();

// Obtener un otaku por ID
const getOtakuById = async (id) => await Otaku.findById(id);

// Obtener eventos por ID del otaku
const getAllEventsFromOtakuId = async (id) =>
  await AnimeEvent.find({ asistenteId: id }).populate("asistenteId");

// Crear nuevo otaku
const createOtaku = async (otakuData) => await Otaku.create(otakuData);

export default {
  getAllOtakus,
  getOtakuById,
  getAllEventsFromOtakuId,
  createOtaku
};
