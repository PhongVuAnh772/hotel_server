const { Sequelize,Model,Datatypes } = require("sequelize");
require("dotenv").config()

const pgURL = process.env.PG_URL


const sequelize = new Sequelize(pgURL) 


const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Authenticated")
    } catch (error) {
        console.error("Unable to connect to database", error)
    }
}

module.exports = {
    connectDB
}