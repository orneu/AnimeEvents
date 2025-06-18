import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { connectMongoDB } from "./src/config/database.js";
import { OtakuRoutes } from "./src/routes/otakuRoutes.js";
import { AnimeEventRoutes } from "./src/routes/animeEventRoutes.js";
import { AuthRoutes } from "./src/routes/authRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use("/api/auth", AuthRoutes);
app.use("/api/otakus", OtakuRoutes);
app.use("/api/events", AnimeEventRoutes);

connectMongoDB();
// sequelize.sync().then(() => console.log("MySQL sincronizado"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
