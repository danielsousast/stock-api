import { Request, Response, Router } from "express"
import { authUserController, createUserController } from "./modules/user/data/controllers"

const router = Router()

router.get("/test", (_req: Request, res: Response) => {
    res.send("Hello, World!")
})

router.post("/users", authUserController.handle)
router.post("/users/auth", createUserController.handle)


export { router }
