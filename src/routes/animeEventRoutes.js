import express from "express";
import {
  getEvents,
  getEventById,
  deleteEventById,
  getAllOtakusByEventId,
  createEvent,
  updateEvent,
} from "../controllers/animeEventController.js";

export const AnimeEventRoutes = express.Router();

AnimeEventRoutes.get("/", getEvents);

AnimeEventRoutes.get("/:id", getEventById);
// event/otaku/23 -> dame todos los otakus del evento donde event id = 23
AnimeEventRoutes.get("/otakus/:id", getAllOtakusByEventId);
AnimeEventRoutes.delete("/:id", deleteEventById);
AnimeEventRoutes.post("/", createEvent);
AnimeEventRoutes.put("/:id", updateEvent);
