import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

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
    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    //informo si todo salio ok
    res.json({ token, message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
};