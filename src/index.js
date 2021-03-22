import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 1000;


app.listen(port, () => { 
  console.log(`server running on port ${port}`);
});



