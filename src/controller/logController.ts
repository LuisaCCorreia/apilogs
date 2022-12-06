import {registarLogService} from '../services/logService'
import {Response, Request} from 'express'

export async function registarLogController(req:Request, res:Response) {
    const body = req.body;
    const response = await registarLogService(body);

      return  res.status(201).json(response);
    
}