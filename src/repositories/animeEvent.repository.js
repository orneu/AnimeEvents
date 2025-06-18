import { AnimeEvent } from "../models/AnimeEvent.js";

const getAllEvents = async () => await AnimeEvent.find().populate("asistentes");
const getEventById = async (id) => await AnimeEvent.findById(id);
const createEvent = async (eventData) => new AnimeEvent(eventData).save();
const updateEvent = async (id, eventData) =>
  await AnimeEvent.findByIdAndUpdate(id, eventData, { new: true });
const deleteEventById = async (id) => await AnimeEvent.findByIdAndDelete(id);

export default {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEventById,
};
