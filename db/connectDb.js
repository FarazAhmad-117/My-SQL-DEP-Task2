import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(process.env.DATABASE_URL) // Conection string


const connectDb = async()=>{
    // Connection to database
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return sequelize;
}

export default connectDb;
export {
    sequelize // export 
};
