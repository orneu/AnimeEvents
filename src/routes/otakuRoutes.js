import express from "express";
import {
  getOtakus,
  getOtakuById,
  getAllEventsFromOtakuId,
  createOtaku,
} from "../controllers/otakuController.js";

export const OtakuRoutes = express.Router();

OtakuRoutes.get("/", getOtakus);
OtakuRoutes.get("/:id", getOtakuById);
OtakuRoutes.post("/", createOtaku);
// otaku/event/23 -> dame todos los eventos donde otukau id = 23
OtakuRoutes.get("/event/:id", getAllEventsFromOtakuId);
