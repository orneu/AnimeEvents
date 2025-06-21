import otakuRepository from "../repositories/otaku.repository.js";
import mongoose from "mongoose";
const getOtakus = async (req, res) => {
  try {
    const otakus = await otakuRepository.getAllOtakus();
    res.json(otakus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOtakuById = async (req, res) => {
  try {
    if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "El ID ingresado es invalido" });
    }
    const otaku = await otakuRepository.getOtakuById(req.params.id);
    res.json(otaku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEventsFromOtakuId = async (req, res) => {
  try {
    const otaku = await otakuRepository.getOtakuById(req.params.id);
    res.json(otaku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOtaku = async (req, res) => {
  try {
    const newOtaku = await otakuRepository.createOtaku(req.body);
    res.status(201).json(newOtaku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getOtakus, getOtakuById, getAllEventsFromOtakuId, createOtaku };
