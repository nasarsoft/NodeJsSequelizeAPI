//const sequelize = require("sequelize");
//const { DataTypes } = require("sequelize/types");

 

module.exports=(sequelize,DataTypes)=>{


    const Review=sequelize.define("review",{
 
        rating:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        }
    });
    return Review;
}