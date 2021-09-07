import { Router } from 'express';

import { HealthController } from '../api/controllers';
import { GeolocationController } from '../api/controllers';

const router = Router();

router.get('/health', HealthController.getHealth);
router.post('/geolocation', GeolocationController.getIPGeolocation);

export default router;
