import app from './app';
import { config } from 'dotenv';

config();

app.listen(process.env.API_PORT, () => {
  console.log('Express server listening on port ' + process.env.API_PORT);
})
