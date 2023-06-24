import jwt from 'jsonwebtoken';
import "dotenv/config.js";


const blacklist = [];

// Función para crear un token
export const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

// Función para verificar y decodificar un token
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

// Agregar el token a la lista negra
export const addToBlacklist = (token) => {
    blacklist.push(token);
  };

// Verificar si el token está en la lista negra
export const isTokenInBlacklist = (token) => {
    return blacklist.includes(token);
  };