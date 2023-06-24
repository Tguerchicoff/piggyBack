import { PlanDeAhorro } from "../Models/Index.js";
import { User } from "../Models/Index.js";

class PlanDeAhorroController {
  //obtengo todos los planes
  async getAll(req, res) {
    try {
      const planDeAhorros = await PlanDeAhorro.findAll();
      res.json(planDeAhorros);
    } catch (error) {
      console.error("Error al obtener los planes de ahorro:", error);
      res.status(300).json({ error: "Error al obtener los planes de ahorro" });
    }
  }

  //obtengo plan por id
  async getById(req, res) {
    try {
      const { id } = req.params;
      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        res.json(planDeAhorro);
      } else {
        res.status(404).json({ mensaje: "Plan de ahorro no encontrado" });
      }
    } catch (error) {
      console.error("Error al obtener el plan de ahorro:", error);
      res.status(500).json({ error: "Error al obtener el plan de ahorro" });
    }
  }

  //obtengo plan por userId
  async getPlanByUserId(req, res) {
    try {
      const { id_usuario } = req.params;
  
      // Verifico que el usuario exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
  
      // Obtengo el plan de ahorro del usuario
      const plan = await PlanDeAhorro.findOne({ where: { id_usuario } });
  
      if (!plan) {
        return res.status(404).json({ mensaje: "Plan de ahorro no encontrado" });
      }
  
      const planSimplificado = {
        nombre: plan.nombre,
        ingresos: plan.ingresos,
        ahorro: plan.ahorro,
        fechaDeCreacion: plan.createdAt,
        fechaDeFinalizacion: plan.fechaDeFinalizacion,
      };
  
      res.setHeader('Cache-Control', 'no-store'); // Desactivar la caché en el lado del cliente
      res.json(planSimplificado);
    } catch (error) {
      console.error("Error al obtener el plan de ahorro por ID de usuario:", error);
      res.status(500).json({ error: "Error al obtener el plan de ahorro por ID de usuario" });
    }
  }

  //creo un plan
  async create(req, res) {
    try {
      const { nombre, ingresos, ahorro, fechaDeFinalizacion, id_usuario } =
        req.body;

      //verifico que el usuario exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }

      //verifico que el usuario no tenga plan creado
      const existingPlanDeAhorro = await PlanDeAhorro.findOne({
        where: { id_usuario },
      });
      if (existingPlanDeAhorro) {
        return res
          .status(400)
          .json({ mensaje: "El usuario ya tiene un plan de ahorro asignado" });
      }

      const newPlanDeAhorro = await PlanDeAhorro.create({
        nombre,
        ingresos,
        ahorro,
        fechaDeFinalizacion,
        id_usuario,
      });
      res.status(201).json(newPlanDeAhorro);
    } catch (error) {
      console.error("Error al crear el plan de ahorro:", error);
      res.status(500).json({ error: "Error al crear el plan de ahorro" });
    }
  }

  //modifico el plans
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, ingresos, ahorro, cantDias, id_usuario } = req.body;

      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        await planDeAhorro.update({
          nombre,
          ingresos,
          ahorro,
          cantDias,
          id_usuario,
        });
        res.json(planDeAhorro);
      } else {
        res.status(404).json({ mensaje: "Plan de ahorro no encontrado" });
      }
    } catch (error) {
      console.error("Error al actualizar el plan de ahorro:", error);
      res.status(500).json({ error: "Error al actualizar el plan de ahorro" });
    }
  }

  //elimino plan por id
  async delete(req, res) {
    try {
      const { id } = req.params;

      const planDeAhorro = await PlanDeAhorro.findByPk(id);
      if (planDeAhorro) {
        await planDeAhorro.destroy();
        res.json({ mensaje: "Plan de ahorro eliminado correctamente" });
      } else {
        res.status(404).json({ mensaje: "Plan de ahorro no encontrado" });
      }
    } catch (error) {
      console.error("Error al eliminar el plan de ahorro:", error);
      res.status(500).json({ error: "Error al eliminar el plan de ahorro" });
    }
  }

  async deleteByUserId(req, res) {
    try {
      const { id_usuario } = req.params;

      // Verificar que el usuario exista
      const user = await User.findByPk(id_usuario);
      if (!user) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }

      const planDeAhorro = await PlanDeAhorro.findOne({
        where: { id_usuario },
      });
      if (planDeAhorro) {
        await planDeAhorro.destroy();
        res.json({ mensaje: "Plan de ahorro eliminado correctamente" });
      } else {
        res.status(404).json({ mensaje: "Plan de ahorro no encontrado" });
      }
    } catch (error) {
      console.error("Error al eliminar el plan de ahorro:", error);
      res.status(500).json({ error: "Error al eliminar el plan de ahorro" });
    }
  }
}

export default new PlanDeAhorroController();
