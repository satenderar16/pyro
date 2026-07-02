
import express from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import { companyUserMiddleware } from '../../middleware/companyUser.middleware';
import orderRouter from './order.routes';

const billingRouter = express.Router();


// making sure all the catelogs only for the authenticated user and only for the companyUser:
billingRouter.use(authMiddleware,companyUserMiddleware);


billingRouter.use('/order',orderRouter);


export default billingRouter;