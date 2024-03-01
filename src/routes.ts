import { Request, Response, Router } from "express"
import { ensureAuth } from "./middlewares/authentication"
import { authUserController, createUserController } from "./modules/user/data/controllers"
import { detailUserController } from "./modules/user/data/controllers/detail-user.controller"
import { listUserController } from "./modules/user/data/controllers/list-user.controller"
import { removeUserController } from "./modules/user/data/controllers/remove-user.controller"

const router = Router()

router.get("/test", (_req: Request, res: Response) => {
    res.send("Hello, World!")
})

router.post("/auth", authUserController.handle)
router.get("/users", listUserController.handle)
router.post("/users", createUserController.handle)
router.delete("/users", ensureAuth, removeUserController.handle)
router.get("/me", ensureAuth, detailUserController.handle)


export { router }
