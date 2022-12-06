const mongoose = require('mongoose');
import {Log} from '../models/logSchema';

export async function registarLogService(body:any) {

    const newLog = new Log({nome: body.nome, ocupacao: body.ocupacao, acao: body.acao, data: new Date()})

    console.log(newLog)

    const insertedLog = await newLog.save();
    

    return insertedLog;
    
}

