import { sequelize } from "../db/connectDb.js"; // import
import { DataTypes } from "sequelize";


const Blog = sequelize.define('Blog',{ // Table
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING(1500),
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
})

export default Blog;


