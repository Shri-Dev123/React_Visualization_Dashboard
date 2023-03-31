const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://kalshettyshrikant:Shrikantkallshetty@cluster0.uufzhth.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const dataRouter = require('./routes/dataRoutes.js');

app.use('/api/data', dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
