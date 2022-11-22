import { Router } from 'express';
const router = Router();

router.get('/verification-completed', (req, res) => {
  console.log(req.body);
  res.render('index', { respuesta: JSON.stringify(req.body) });
});

module.exports = router;
