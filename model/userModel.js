import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: { 
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
