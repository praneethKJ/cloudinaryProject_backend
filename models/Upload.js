import mongoose from 'mongoose';

const { Schema } = mongoose;

const UploadSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    videoUrl: {
        type: String,
        default: '', 
    },
    createdAt: {
        type: Date,
        default: Date.now, // Store the creation date for imageUrl and videoUrl
    },
});

const Upload = mongoose.model('Upload', UploadSchema);
export default Upload;
