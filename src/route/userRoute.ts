import * as express from "express";
import { deleteUser, getOneUser, getUsers, signUp } from "../controllers/userController";
import { login } from "../controllers/userController";
import { editLogin } from "../controllers/userController";
import { auth } from "../middleware/auth";
import  multer  from "../middleware/multer-config";








const router = express.Router()




router.post('/signUp', multer, signUp )
router.post('/login', login)
router.get('/allUsers', auth, getUsers)
router.get('/allUsers/:id', auth, getOneUser)
router.put('/allUsers/:id/edit', auth, editLogin )
router.delete('/allUsers/:id', deleteUser)

export default router;