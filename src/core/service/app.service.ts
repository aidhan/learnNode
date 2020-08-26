import { IService } from "@util/shared/IService";
import express from 'express'

class AppService implements IService {
    path = '/app';    
    router = express.Router()

    constructor() {
        this.initRouter()
    }
    private initRouter() : void {
        this.router.get(`${this.path}/ping`, this.ping);
        this.router.get(`${this.path}/pong`, this.pong);
    }
    private ping = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return res.json('pong')
    }
    private pong = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return res.json('ping')
    }

}

export default AppService;