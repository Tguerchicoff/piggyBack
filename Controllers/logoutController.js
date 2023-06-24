import { addToBlacklist, isTokenInBlacklist } from '../Utils/token.js';
import { User } from '../Models/Index.js';

export const logout = async (req, res) => {
  try {
    // Obtengo el token de autorización del encabezado de la solicitud
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Verifico la existencia del token
    if (!token) {
      return res.status(401).json({ mensaje: 'Token de autorización no proporcionado' });
    }

    // Verifico si el token está en la lista negra
    if (isTokenInBlacklist(token)) {
      return res.status(401).json({ mensaje: 'Token de autorización inválido' });
    }

    // Agrego el token a la lista negra
    addToBlacklist(token);

    // Indico cierre exitoso
    res.json({ mensaje: 'Cierre de sesión exitoso' });
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    res.status(500).json({ error: 'Error al cerrar sesión' });
  }
};

export default logout;