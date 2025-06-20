import otakuRepository from "../repositories/otaku.repository.js";

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

export { getOtakus, getOtakuById, getAllEventsFromOtakuId };
