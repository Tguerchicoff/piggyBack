import Gasto from '../Models/Gasto.js';
import User from '../Models/User.js';

class GastoController {
  //obtengo todos los gastos
  async getAll(req, res) {
    try {
      const gastos = await Gasto.findAll();
      res.json(gastos);
    } catch (error) {
      console.error('Error al obtener los gastos:', error);
      res.status(500).json({ error: 'Error al obtener los gastos' });
    }
  }

  //obtengo gasto por id
  async getById(req, res) {
    try {
      const { id } = req.params;
      const gasto = await Gasto.findByPk(id);
      if (gasto) {
        res.json(gasto);
      } else {
        res.status(404).json({ mensaje: 'Gasto no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el gasto:', error);
      res.status(500).json({ error: 'Error al obtener el gasto' });
    }
  }

  //obtengo gasto por userId
  async getGastosByUserId(req, res) {
    try {
      const { id_usuario } = req.params;

      //verifico que el usuario exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      const gastos = await Gasto.findAll({ where: { id_usuario } });

      res.json(gastos);
    } catch (error) {
      console.error('Error al obtener los gastos por ID de usuario:', error);
      res.status(500).json({ error: 'Error al obtener los gastos por ID de usuario' });
    }
  }

  //obtengo solo los costos de los gastos por userId
  async getCostsByUserId(req, res) {
    try {
      const { id_usuario } = req.params;
  
      //verifico que el usuario exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      const gastos = await Gasto.findAll({
        where: { id_usuario },
        attributes: ['costo'], // Solo obtener el campo 'costo'
      });
  
      const costs = gastos.map((gasto) => gasto.costo);
  
      res.json(costs);
    } catch (error) {
      console.error('Error al obtener los costos de los gastos por ID de usuario:', error);
      res.status(500).json({ error: 'Error al obtener los costos de los gastos por ID de usuario' });
    }
  }

  //creo un gasto
  async create(req, res) {
    try {
      const { nombre, costo, prioridad, id_usuario } = req.body;

      //verifico que el usuario al que se le esta tratando de asignar el gasto exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      const newGasto = await Gasto.create({
        nombre,
        costo,
        prioridad,
        id_usuario,
      });
      res.status(201).json(newGasto);
    } catch (error) {
      console.error('Error al crear el gasto:', error);
      res.status(500).json({ error: 'Error al crear el gasto' });
    }
  }

  //modifico el gasto por id, no paso el usuario id para q no lo pueda cambiar
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, costo, prioridad} = req.body;

      const gasto = await Gasto.findByPk(id);
      if (gasto) {
        await gasto.update({
          nombre,
          costo,
          prioridad,
        });
        res.json(gasto);
      } else {
        res.status(404).json({ mensaje: 'Gasto no encontrado' });
      }
    } catch (error) {
      console.error('Error al actualizar el gasto:', error);
      res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
  }

  //borro gasto por id
  async delete(req, res) {
    try {
      const { id } = req.params;
      const gasto = await Gasto.findByPk(id);
      if (gasto) {
        await gasto.destroy();
        res.json({ mensaje: 'Gasto eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Gasto no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar el gasto:', error);
      res.status(500).json({ error: 'Error al eliminar el gasto' });
    }
  }
}

export default new GastoController;