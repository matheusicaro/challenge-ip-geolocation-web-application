import { Router } from 'express';

import { HealthController } from '../controllers';
import { GeolocationController } from '../controllers';

const router = Router();

router.get('/health', HealthController.getHealth);
router.post('/geolocation', GeolocationController.getIPGeolocation);

export default router;
