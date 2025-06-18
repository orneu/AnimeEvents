import { Otaku } from "../models/Otaku.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { nombre, dni, edad, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const otaku = await Otaku.create({
      nombre,
      dni,
      edad,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Otaku registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar otaku:", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { dni, password } = req.body;
    const otaku = await Otaku.findOne({ where: { dni } });

    if (!otaku || !(await bcrypt.compare(password, otaku.password))) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign({ otakuId: otaku.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const logout = (req, res) => {
  // Invalidate the token on the client side
  res.json({ message: "Logout exitoso" });
};

export { register, login, logout };
