import { model, Schema } from 'mongoose';

const tasksSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            // minlength: [8, 'Title must be atleast 8 characters'],
            maxlength: [50, 'Title cannot be more than 50 characters'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minlength: [20, 'Description must be atleast 20 characters long'],
        },
        status: {
            type: String,
            required: true,
            default: 'pending'
        },
    },
    {
        timestamps: true,
    }
);

const Task = model('Task', tasksSchema);

export default Task;
