import jwt from "jsonwebtoken";

import AppError from "../utils/appError.js";
import asyncHandler from "./asyncHandler.middleware.js";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
    // extracting token from the cookies
    if (!req.cookies) {
        return res.status(200).json({
            success: false,
            message: 'User not logged in',
        });
    }
    const { token } = req.cookies;

    // If no token send unauthorized message
    if (!token) {
        // return next(new AppError("Unauthenticated, please login to continue", 401));
        return res.status(200).json({
            success: false,
            message: 'User not logged in',
        });
    }

    // Decoding the token using jwt package verify method
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // If no decode send the message unauthorized
    if (!decoded) {
        // return next(new AppError("Unauthenticated, please login to continue", 401));
        return res.status(200).json({
            success: false,
            message: 'User not logged in',
        });
    }

    // If all good store the id in req object, here we are modifying the request object and adding a custom field user in it
    req.user = decoded;

    // Do not forget to call the next other wise the flow of execution will not be passed further
    next();
});