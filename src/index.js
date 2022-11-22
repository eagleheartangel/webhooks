import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import engine from 'ejs-mate';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  })
);

import router from './routes/webhooks';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('Listen on port ' + port);
});
