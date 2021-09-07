import { Router } from 'express';

import { HealthController } from '../controllers';

const router = Router();

router.get('/health', HealthController.getHealth);

export default router;
