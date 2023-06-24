import bcrypt from 'bcrypt';
import { User } from '../Models/Index.js';
import { createToken } from '../Utils/token.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifico que el email corresponda a un usuario
    const user = await User.findOne({ where: { email } });

    // Informo si el email no corresponde a nadie con 401
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Comparo las contraseñas utilizando bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password);

    // Informo si la contraseña no es correcta con 401
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Genero el token utilizando la función createToken
    const token = createToken({ userId: user.id });

    // Devuelvo el userId, token y un mensaje de éxito
    res.json({ userId: user.id, token, message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
};