import path from 'path';
import express from 'express';
import dbConnection from './config/database.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database
dbConnection();


//Routes
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/upload', uploadRoutes)



const __dirname = path.resolve(); 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.get('/', (req, res) => res.send('API is running'));

app.use(notFound);
app.use(errorHandler);



const port = 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})