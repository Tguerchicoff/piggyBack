import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from '../Models/Index.js';
import "dotenv/config.js";



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //verifico que el mail corresponda a un usuario
    const user = await User.findOne({ where: { email } });
    //informo si el mail no corresponde a nadie con 401
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    //comparo mediante bcrypt las contrasenias
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      //informo si la contrasenia no es correcta con 401
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }


    
    //genero el token 
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //con cookie parser se puede pasar la cookie
    //informo si todo salio ok
    //por el momento no devuelvo el token
    //res.json({ token, message: 'Inicio de sesión exitoso' });
    res.json({ userId: user.id });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
};