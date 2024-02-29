import { Request, Response } from "express";
import { AuthDTO, AuthResponseDTO } from "../../domain/user.dtos";
import { authUserServiceImpl } from "../services/auth-user.service";

type Req = Request<any, any, AuthDTO>;
type Res = Response<AuthResponseDTO>;

class AuthUserController {
    async handle(req: Req, res: Res): Promise<Response<AuthResponseDTO>> {
        const authResponse = await authUserServiceImpl.execute(req.body);
        return res.json(authResponse);
    }
}

export const authUserController = new AuthUserController();
