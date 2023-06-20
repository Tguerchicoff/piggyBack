import { Router } from "express";
import controller from "../Controllers/gastoController.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/usuario/:id_usuario", controller.getGastosByUserId);
router.get("/costs/:id_usuario", controller.getCostsByUserId);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
