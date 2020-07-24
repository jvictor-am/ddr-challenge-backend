import { Request, Response } from 'express';
import Tabulacao from '../models/Tabulacao';

class TabulacaoController {
  async store(req: Request, res: Response) {
    try {
      const {
        nomeCliente,
        protocolo,
        dataAtendimento,
        numeroBinado,
        numeroAcesso,
      } = req.body;

      const tabulacao = await Tabulacao.create({
        nomeCliente,
        protocolo,
        dataAtendimento,
        numeroBinado,
        numeroAcesso,
      });

      res.json(tabulacao);
    } catch (error) {
      return res.status(400).send({ error: 'Falha ao salvar Gravacao' });
    }
  }
}

export default TabulacaoController;
