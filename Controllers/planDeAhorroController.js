import PlanDeAhorro from '../Models/PlanDeAhorro.js';
import User from '../Models/User.js';


const planDeAhorroController = {
  getAll: async (req, res) => {
    try {
      const planDeAhorros = await PlanDeAhorro.findAll();
      res.json(planDeAhorros);
    } catch (error) {
      console.error('Error al obtener los planes de ahorro:', error);
      res.status(500).json({ error: 'Error al obtener los planes de ahorro' });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        res.json(planDeAhorro);
      } else {
        res.status(404).json({ mensaje: 'Plan de ahorro no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el plan de ahorro:', error);
      res.status(500).json({ error: 'Error al obtener el plan de ahorro' });
    }
  },


  create: async (req, res) => {
    try {
      const { nombre, ingresos, ahorro, cantDias, id_usuario } = req.body;
  
      // Verificar si el usuario existe
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      // Verificar si el usuario ya tiene un plan de ahorro asignado
      const existingPlanDeAhorro = await PlanDeAhorro.findOne({
        where: { id_usuario },
      });
      if (existingPlanDeAhorro) {
        return res.status(400).json({ mensaje: 'El usuario ya tiene un plan de ahorro asignado' });
      }
  
      const newPlanDeAhorro = await PlanDeAhorro.create({
        nombre,
        ingresos,
        ahorro,
        cantDias,
        id_usuario,
      });
      res.status(201).json(newPlanDeAhorro);
    } catch (error) {
      console.error('Error al crear el plan de ahorro:', error);
      res.status(500).json({ error: 'Error al crear el plan de ahorro' });
    }
  },


  
  update: async (req, res) => {
    try {
      const { id } = req.body;
      const { nombre, ingresos, ahorro, cantDias, id_usuario } = req.body; // Agrega id_usuario al destructuring del cuerpo de la solicitud
      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        await planDeAhorro.update({
          nombre,
          ingresos,
          ahorro,
          cantDias,
          id_usuario, // Actualiza el valor del campo id_usuario con el valor proporcionado en el cuerpo de la solicitud
        });
        res.json(planDeAhorro);
      } else {
        res.status(404).json({ mensaje: 'Plan de ahorro no encontrado' });
      }
    } catch (error) {
      console.error('Error al actualizar el plan de ahorro:', error);
      res.status(500).json({ error: 'Error al actualizar el plan de ahorro' });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        await planDeAhorro.destroy();
        res.json({ mensaje: 'Plan de ahorro eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Plan de ahorro no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar el plan de ahorro:', error);
      res.status(500).json({ error: 'Error al eliminar el plan de ahorro' });
    }
  },
};

export default planDeAhorroController;