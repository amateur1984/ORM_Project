import * as express from "express"
import { deletePays, getPays } from "../controllers/paysController";
import { getOnePays } from "../controllers/paysController";
import { createPays } from "../controllers/paysController";
import { modifyPays } from "../controllers/paysController";
import { auth } from "../middleware/auth";



const router = express.Router();


// register routes
router.get("/", getPays )
router.get("/:id", getOnePays )
router.post("/", auth, createPays)
router.put("/:id", auth, modifyPays)
router.delete("/:id", auth, deletePays)

export default router;
