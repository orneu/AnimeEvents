import animeEventRepository from "../repositories/animeEvent.repository.js";

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await animeEventRepository.createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const updatedEvent = await animeEventRepository.updateEvent(
      req.params.id,
      eventData
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await animeEventRepository.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await animeEventRepository.getEventById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEventById = async (req, res) => {
  try {
    const event = await animeEventRepository.deleteEventById(req.params.id);
    res.json({ data: event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllOtakusByEventId = async (req, res) => {
  try {
    const event = await animeEventRepository.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    const otakus = event.asistentes || [];
    res.json(otakus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getEvents,
  getEventById,
  deleteEventById,
  getAllOtakusByEventId,
  createEvent,
  updateEvent,
};
