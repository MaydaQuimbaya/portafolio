import mongoose from 'mongoose';

const connectDB = async (DATABASEURL) => {
    const DB_OPTIONS = {
        dbName: 'portfolio', // Esto es importante: asegúrate de que coincide con tu intención
    };

    try {
        const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
        console.log(`Database connection successful: ${data.connection.host}:${data.connection.port}/${data.connection.name}`);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

export default connectDB;
