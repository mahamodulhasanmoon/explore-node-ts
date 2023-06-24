import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const middleware = [morgan('dev'),cors(),express.json()]
export default middleware