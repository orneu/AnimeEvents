import express from "express";
import {
  getOtakus,
  getOtakuById,
  getAllEventsFromOtakuId,
} from "../controllers/otakuController.js";

export const OtakuRoutes = express.Router();

OtakuRoutes.get("/", getOtakus);
OtakuRoutes.get("/:id", getOtakuById);
// otaku/event/23 -> dame todos los eventos donde otukau id = 23
OtakuRoutes.get("/event/:id", getAllEventsFromOtakuId);
