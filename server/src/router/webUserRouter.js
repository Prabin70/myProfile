import { Router } from 'express'
import { webUserController } from '../controller/webUserController.js';


let webUserRouter = Router();
webUserRouter.route('/').post(webUserController);

export default webUserRouter;

