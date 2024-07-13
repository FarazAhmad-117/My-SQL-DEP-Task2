import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import logger from 'morgan';
import connectDb from './db/connectDb.js';
import connectRoutes from './routes/connectRoutes.js';
import { syncModels } from './models/index.js';
config();



const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json({
    limit:process.env.JSON_LIMIT // Not Important
}))


app.use(cors({
    origin:'*'   // Allow Cross Origin Request
}));


app.use(logger('dev')); // Method response route


connectRoutes(app);


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/api',(req,res)=>{
    res.json({message:"Hello I am up and running"});
})


app.get('*',(req,res)=>{
    res.json({message:"Path not found"});
})

let sequelize;

connectDb()
    .then(()=>{
        return syncModels()
    })
    .then((seq) => {
        console.log('Database connected');
        sequelize = seq;
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    });

