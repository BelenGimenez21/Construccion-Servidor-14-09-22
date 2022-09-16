const { model, Schema} = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('tasks', taskSchema);