import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Task from "../models/tasks.model.js";
import AppError from "../utils/appError.js";

/**
 * @ALL_TASKS
 * @ROUTE @GET {{URL}}/api/v1/tasks
 * @ACCESS Public
 */
export const getAllTasks = asyncHandler(async (_req, res, next) => {
    // Find all the tasks
    const tasks = await Task.find({})

    res.status(200).json({
        success: true,
        message: 'All tasks',
        tasks,
    });
});

/**
 * @GET_TASK_BY_ID
 * @ROUTE @GET {{URL}}/api/v1/tasks/:id
 * @ACCESS Public
 */
export const getTaskById = asyncHandler(async (req, res, next) => {
    // Extracting id from the request parameters
    const { id } = req.params;

    // Finding the task via the task ID
    const task = await Task.findById(id);

    if (!task) {
        return next(new AppError('Task with given id does not exist.', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Task',
        task,
    });
});

/**
 * @CREATE_TASK
 * @ROUTE @POST {{URL}}/api/v1/tasks
 * @ACCESS Public
 */
export const createTask = asyncHandler(async (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return next(new AppError('All fields are required', 400));
    }

    const task = await Task.create({
        title,
        description,
    });

    if (!task) {
        return next(
            new AppError('Task could not be created, please try again', 400)
        );
    }

    // Save the changes
    await task.save();

    res.status(201).json({
        success: true,
        message: 'Task created successfully',
        task,
    });
});

/**
 * @UPDATE_TASK_BY_ID
 * @ROUTE @PUT {{URL}}/api/v1/tasks/:id
 * @ACCESS Public
 */
export const updateTaskById = asyncHandler(async (req, res, next) => {
    // Extracting the Task id from the request params
    const { id } = req.params;

    // Finding the Task using the task id
    const task = await Task.findByIdAndUpdate(
        id,
        {
            $set: req.body, // This will only update the fields which are present
        },
        {
            runValidators: true, // This will run the validation checks on the new data
        }
    );

    // If no task found then send the response for the same
    if (!task) {
        return next(new AppError('Invalid task id or task not found.', 400));
    }

    // Sending the response after success
    res.status(200).json({
        success: true,
        message: 'Task updated successfully',
    });
});

/**
 * @DELETE_TASK_BY_ID
 * @ROUTE @DELETE {{URL}}/api/v1/tasks/:id
 * @ACCESS Public
 */
export const deleteTaskById = asyncHandler(async (req, res, next) => {
    // Extracting id from the request parameters
    const { id } = req.params;

    // Finding the task via the task ID
    const task = await Task.findById(id);

    // If task not find send the message as stated below
    if (!task) {
        return next(new AppError('Task with given id does not exist.', 404));
    }

    // Remove task
    await task.deleteOne();

    // Send the message as response
    res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
        data: task
    });
});