
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    },

excercises: [
    {
        type: {
            type: String,
            trim: true,
            required: 'What type of excercise would you like to enter'
        },

        type: {
            type: String,
            trim: true,
            required: 'What is the name of the excercise?'
        },

        type: {
            type: Number,
            trim: true,
            required: 'How long will your excercise last?'
        },

        weight: {
            type: Number,
            trim: true,
        },

        sets: {
            type: Number,
            trim: true,
        },

        reps: {
            type: Number,
            trim: true,
        },

        distance: {
            type: Number,
            trim: true,
        },
    },
],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;