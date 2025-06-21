import { Otaku } from "../models/Otaku.js";
import { AnimeEvent } from "../models/AnimeEvent.js";

const getAllOtakus = async () => await Otaku.findAll();
const getOtakuById = async (id) =>
  await Otaku.find({
    where: { id },
  });
const getAllEventsFromOtakuId = async (id) =>
  await AnimeEvent.findAll({
    where: { asistenteId: id },
    include: [{ model: Otaku, as: "asistentes" }],
  });


const createOtaku = async (otakuData) => new Otaku(otakuData).save();

export default {
  getAllOtakus,
  getOtakuById,
  getAllEventsFromOtakuId,
  createOtaku
};
