const otakuRepository = require("../repositories/otakuRepository");

const getOtakus = async () => {
  return await otakuRepository.getAllOtakus();
};

const createOtaku = async (data) => {
  if (!data.name || typeof data.name !== "string") {
    throw new Error("El nombre del otaku es obligatorio y debe ser una cadena");
  }
  return await otakuRepository.createOtaku(data);
};

module.exports = { getOtakus, createOtaku };