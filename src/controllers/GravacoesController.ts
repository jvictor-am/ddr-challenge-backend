import { Request, Response } from 'express';
import Gravacao from '../models/Gravacao';

class GravacoesController {
  async store(req: Request, res: Response) {
    try {
      const { telefone, ramal, dataGravacao } = req.body;

      const gravacao = await Gravacao.create({
        telefone,
        ramal,
        dataGravacao,
      });

      res.json(gravacao);
    } catch (error) {
      return res.status(400).send({ error: 'Falha ao salvar gravacao' });
    }
  }
}

export default GravacoesController;
