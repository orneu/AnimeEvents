import express from "express";
import { login, register, logout } from "../controllers/authController.js";

export const AuthRoutes = express.Router();

AuthRoutes.get("/login", login);
AuthRoutes.post("/register", register);
// otaku/event/23 -> dame todos los eventos donde otukau id = 23
AuthRoutes.post("/logout", logout);
