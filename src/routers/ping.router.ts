import express from 'express';
import { pingHandler } from '../controller/ping.controller';

export const pingRouter = express.Router();

pingRouter.get('/ping', pingHandler);
