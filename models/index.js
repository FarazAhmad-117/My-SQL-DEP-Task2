import { sequelize } from '../db/connectDb.js';
import Blog from './Blog.model.js';


const models = {
    Blog
}


const syncModels = async()=>{
    await sequelize.sync({force:false}); // Database acknowledge
    console.log('All models were syncronized correctly!');
}


export {
    models,
    syncModels
}

