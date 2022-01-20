import mongoose from 'mongoose';

mongoose.set('debug', true);

const dbConnection = () => {
   mongoose.connect('mongodb://localhost/productsCRUD', {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      keepAlive: true,
   });
   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', () => console.log('MongoDB Connected!'));

   mongoose.Promise = Promise;
}

export default dbConnection;
