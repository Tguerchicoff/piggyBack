import "dotenv/config.js";
import jwt from 'jsonwebtoken';
import {User} from '../Models/Index.js';
export const logout = async (req, res) => {
    try {
        //obtengo el token de autorizacion del encabezado de solicitud
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
  
        //verifico existencia del token
        if (!token) {
          return res.status(401).json({ mensaje: 'Token de autorización no proporcionado' });
        }
  
        //decodifico el token (jsonwebtoken)
        jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
          if (error) {
            //si da error lo informo con 401
            return res.status(401).json({ mensaje: 'Token de autorización inválido' });
          }
  
          //obtengo id de token decodificado
          const userId = decoded.userId;
  
          //busco usuario en base de datos
          const user = await User.findByPk(userId);
  
          if (!user) {
            //si no existe lo informo con 404
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
          }
  
          //elimino el token
          user.token = null;
          await user.save();
  
          //indico cierre exitoso
          res.json({ mensaje: 'Cierre de sesión exitoso' });
        });
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        res.status(500).json({ error: 'Error al cerrar sesión' });
      }
};


export default logout;