import { Router } from 'express';
import authRoute from './auth.routes.ts';
import companyRouter from './company/company.routes.ts';
import catelogRouter from './catelog/catelog.routes.ts';
import billingRouter from './billing/billing.routes.ts';

const router = Router();

router.get("/", (req:any, res:any) => {
  res.json({ message: "API is running " });
});


router.use("/auth", authRoute);
router.use("/company",companyRouter);
// // company-user,invites and be used as subroutes within company route
    // router.use('/company-user',companyUserRouter)
    // router.use('/invites',companyInviteRoutes);
router.use("/catelog",catelogRouter);


router.use("/billing",billingRouter);



export default router;