import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    current: {
        type: Boolean,
        default: false
    },
    description: [{
        type: String,
        required: true
    }],
    technologies: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Experience', experienceSchema);