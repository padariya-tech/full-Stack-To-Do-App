const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nijpadariya:Nij125909%40%40%40@cluster0.w6nczc3.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,  // Corrected from 'boolean'
        default: false  // Assuming default value is false
    }
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);
module.exports = { Todo };
