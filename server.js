import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const port = 3001;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
// app.use('/api/messages');
// app.use('/api/orders');
// app.use('/api/reviews');
// app.use('/api/conversations');

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
  connect();
  console.log(`server start and up and running on ${port}`);
});
