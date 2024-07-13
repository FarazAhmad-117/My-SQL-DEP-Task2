import { Router } from 'express';
import { Create, Delete, GetALL, Update } from '../controllers/blogs.controller.js';

const router = Router();



router.post('/',Create);
router.put('/:id',Update);
router.get('/',GetALL);
router.delete('/:id',Delete);



export default router;

