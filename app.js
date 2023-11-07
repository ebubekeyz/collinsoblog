require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const path = require('path');

const fileUpload = require('express-fileupload');

const cors = require('cors')

//Routers
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const articleRouter = require('./routes/articleRoutes')
const commentRouter = require('./routes/commentRoutes')
const contactRouter = require('./routes/contactRoutes')
const advertRouter = require('./routes/advertRoutes')

const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET
})

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));

app.use(fileUpload({ useTempFiles: true }));

app.use(cors({credentials: true}));

//Routers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/article', articleRouter)
app.use('/api/v1/comment', commentRouter)
app.use('/api/v1/contact', contactRouter)
app.use('/api/v1/advert', advertRouter)

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/about.html'))
})
app.get('/privacy', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/privacy.html'))
})
app.get('/advertise', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/advertise.html'))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/contact.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/login.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/register.html'))
})
app.get('/blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/blog.html'))
})

app.get('/single-blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/single-blog.html'))
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 1000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
};

start();


