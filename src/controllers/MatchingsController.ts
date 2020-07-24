import { Request, Response } from 'express';
import Gravacao from '../models/Gravacao';
import Tabulacao from '../models/Tabulacao';
import Matching from '../models/Matching';
import schedule from 'node-schedule';

const ciclo = 6;

async function saveMatching() {
  const matchings = await Matching.find();
  const tabulacoes = await Tabulacao.find();
  const gravacoes = await Gravacao.find();

  for (const matching of matchings) {
    for (let i = 0; i < tabulacoes.length; i += 1) {
      if (matching.tabulacao.toString() === tabulacoes[i]._id.toString()) {
        tabulacoes.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < gravacoes.length; i += 1) {
      if (matching.gravacao.toString() === gravacoes[i]._id.toString()) {
        gravacoes.splice(i, 1);
        break;
      }
    }
  }

  for (const gravacao of gravacoes) {
    for (const tabulacao of tabulacoes) {
      if (
        tabulacao.numeroBinado === gravacao.telefone ||
        tabulacao.numeroAcesso === gravacao.telefone
      ) {
        Matching.create({
          gravacao: gravacao._id,
          tabulacao: tabulacao._id,
        });

        break;
      }
    }
  }
  return;
}

schedule.scheduleJob(`0 0 */${ciclo} * * *`, function () {
  saveMatching();
  console.log('Processo de Matching realizado com sucesso.');
});

class MatchingsController {
  async store(req: Request, res: Response) {
    try {
      saveMatching();
      return res
        .status(200)
        .send({ message: 'Matching realizado com sucesso' });
    } catch (error) {
      return res.status(400).send({ error: 'Falha ao salvar Matching' });
    }
  }

  async readAll(req: Request, res: Response) {
    try {
      const matchings = await Matching.find();
      return res.json(matchings);
    } catch (error) {
      return res.status(400).send({ error: 'Reading Matchings failed' });
    }
  }
}

export default MatchingsController;
