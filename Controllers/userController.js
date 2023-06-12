import User from "../Models/User.js";

class UserController {
  //obtengo todos los usuarios
  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes:["id", "email"]//al realizar findAll al profe le gusta pasar attributes
      });
      res.json(users);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };

  //creo un usuario
  createUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = await User.create({ email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  };

  //modifico un usuario
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      await user.update({ email, password });
      res.json(user);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  };

  //elimino un usuario
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      await user.destroy();
      res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };
}

export default new UserController();