const otakuRepository = require("../repositories/otakuRepository");

const getOtakus = async () => await otakuRepository.getAllOtakus();
const createOtaku = async (data) => await otakuRepository.createOtaku(data);

module.exports = { getOtakus, createOtaku };
