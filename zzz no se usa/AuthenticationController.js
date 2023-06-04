import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../Models/User.js';

class AuthenticationController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Verificar si el usuario existe en la base de datos
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      // Verificar si la contraseña es válida
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      // Generar el token de autenticación
      const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).json({ error: 'Error en el inicio de sesión' });
    }
  }

  async register(req, res) {
    try {
      const { email, password } = req.body;

      // Verificar si el usuario ya está registrado
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya está registrado' });
      }

      // Crear el nuevo usuario
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, password: hashedPassword });

      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.error('Error en el registro de usuario:', error);
      res.status(500).json({ error: 'Error en el registro de usuario' });
    }
  }

  async logout(req, res) {
    try {
      // Implementar la lógica de cierre de sesión si es necesario
      res.json({ message: 'Cierre de sesión exitoso' });
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
      res.status(500).json({ error: 'Error en el cierre de sesión' });
    }
  }
}

export default new AuthenticationController();