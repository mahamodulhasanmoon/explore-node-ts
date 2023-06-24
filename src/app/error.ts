import {Request, Response, NextFunction} from 'express'
interface NotFoundError extends Error {
    status: number;
  }

  
export const notFoundHandler = (req:Request,res:Response,next:NextFunction) =>{
    const error: Error = new Error('Resource not found');
	error.status = 404;
	next(error);  
}

export const errorHandler = (error, _req, res, _next) => {
	if (error.status) {
		res.status(error.status).json({
			message: error.message,
		});
	}

	res.status(500).json({ message: 'Something went wrong' });
};