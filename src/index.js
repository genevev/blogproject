import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 9020;


app.listen(port, () => { 
  console.log(`server running on port ${port}`);
});



